import QuizCard from "../../components/QuizCard/QuizCard";

import FadeLoader from "react-spinners/FadeLoader";
import { fetchQuestion } from "../../features/QnASlice"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

export default function Quiz() {
  const loadingFetchQue = useSelector((state) => { return state.qNA.isLoading })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuestion())
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-10">
      <div className={`${loadingFetchQue ? 'flex' : 'hidden'} absolute top-0 left-0 right-0 bottom-0 bg-white/55 backdrop-blur-sm justify-center items-center z-[100]`}>
        <FadeLoader loading={true} color="#06b6d4" size={150} />
      </div>
      <QuizCard />
    </div>
  )
}