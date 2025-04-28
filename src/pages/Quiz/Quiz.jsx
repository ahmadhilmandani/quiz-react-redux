import QuizCard from "../../components/QuizCard/QuizCard";

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { setTimer, setTimerActive } from "../../redux/TimerSlice";
import { useQuestionQuery } from "../../hooks/useQuestionQuery";
import { toast } from "react-toastify";
import ToastWithButton from "../../components/Toast/Toast";
import { setScore } from "../../redux/ScoreSlice";
import { useLocation, useNavigate } from "react-router-dom";


export default function Quiz() {
  const timer = useSelector((state) => { return state.timer.value })
  const answer = useSelector((state) => state.qNA.answer)
  const dispatch = useDispatch()
  const { data: listQnA, isLoading } = useQuestionQuery()
  const currentQuestionIndex = useSelector((state) => { return state.qNA.currentQuestionIndex })
  const [isAnswered, setIsAnswered] = useState(false)
  const navigate = useNavigate()
  let location = useLocation()

  useEffect(() => {
    if (currentQuestionIndex == 10) {
      return navigate('/quiz/result')
    }
    setIsAnswered(false)
  }, [currentQuestionIndex, navigate])

  useEffect(() => {
    dispatch(setTimerActive({ 'isActive': true }))

    return () => {
      dispatch(setTimerActive({ 'isActive': false }))
    }
  }, [location, dispatch])

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (isAnswered) {
      return
    }

    if (!answer[currentQuestionIndex] && timer == 0) {
      toast(<ToastWithButton isTimeout={true} correctAnswer={listQnA[currentQuestionIndex].correct_answer} />, {
        closeButton: false,
        className: 'p-4 min-w-[320px] max-w-[640px] w-screen border border-red-600/40',
        ariaLabel: 'Answer incorrect and time run out',
      })
    }

    else if (answer[currentQuestionIndex] && timer != 0) {
      if (listQnA[currentQuestionIndex].correct_answer == answer[currentQuestionIndex]) {
        toast(<ToastWithButton isCorrect={true} correctAnswer={listQnA[currentQuestionIndex].correct_answer} />, {
          closeButton: false,
          className: 'p-4 min-w-[320px] max-w-[640px] w-screen border border-emerald-600/40',
          ariaLabel: 'Answer correct',
        })
        setIsAnswered(true)
      } else {
        toast(<ToastWithButton correctAnswer={listQnA[currentQuestionIndex].correct_answer} />, {
          closeButton: false,
          className: 'p-4 min-w-[320px] max-w-[640px] w-screen border border-red-600/40',
          ariaLabel: 'Answer incorrect',
        })
        setIsAnswered(true)
      }
    }

    setTimeout(() => {
      if (!answer[currentQuestionIndex] && timer != 0) {
        dispatch(setTimer({ 'timer': timer - 1 }))
      } else {
        return
      }
    }, 1000)


  }, [answer, currentQuestionIndex, listQnA, timer, isLoading, dispatch, isAnswered])


  useEffect(() => {
    if (answer.length - 1 == currentQuestionIndex) {
      if (listQnA[currentQuestionIndex].correct_answer == answer[currentQuestionIndex]) {
        dispatch(setScore())
      }
    }
  }, [answer, dispatch, listQnA, currentQuestionIndex])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        Loading
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen pt-24 pb-10 px-4">
      <QuizCard listQnA={listQnA} />
    </div>
  )
}