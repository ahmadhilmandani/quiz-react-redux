import QuizCard from "../../components/QuizCard/QuizCard";

import { fetchQuestion } from "../../features/QnASlice"

import { useDispatch } from "react-redux"

export default function Quiz() {
  const dispatch = useDispatch()
  dispatch(fetchQuestion())

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-10">
      <QuizCard />
    </div>
  )
}