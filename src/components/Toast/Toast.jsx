import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { setCurrentQuestionIndex } from "../../redux/QnASlice"
import { PropTypes } from 'prop-types'

export default function ToastWithButton({ isCorrect = false, correctAnswer }) {
  const dispatch = useDispatch()
  const currentQuestionIndex = useSelector((state) => { return state.qNA.currentQuestionIndex })

  function handleNextQuestion() {
    dispatch(setCurrentQuestionIndex({ 'questionIndex': currentQuestionIndex + 1 }))
    toast.dismiss()
  }

  if (isCorrect) {
    return (
      <div className="w-full">
        <strong className="text-emerald-500 block mb-1">
          Correct ✅
        </strong>
        <div className="text-neutral-600 mb-4">
          <strong className="text-neutral-600">{correctAnswer}</strong> is a <strong className="text-neutral-600">correct</strong> answer.
        </div>
        <div>
          <button
            onClick={() => {
              handleNextQuestion()
            }}
            className="py-2 px-6 rounded-md bg-emerald-500 w-full text-white font-medium">Next Question</button>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="w-full">
        <strong className="text-rose-500 block mb-1">
          Incorrect ❌
        </strong>
        <div className="text-neutral-600 mb-4">
          <strong className="text-neutral-600">{correctAnswer}</strong> is a <strong className="text-neutral-600">correct</strong> answer.
        </div>
        <div>
          <button
            onClick={() => {
              handleNextQuestion()
            }} className="py-2 px-6 rounded-md bg-rose-500 w-full text-white font-medium">Next Question</button>
        </div>
      </div>
    )
  }
}

ToastWithButton.propTypes = {
  isCorrect: PropTypes.bool,
  correctAnswer: PropTypes.string
}