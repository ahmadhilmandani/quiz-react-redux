import QuizCard from "../../components/QuizCard/QuizCard";

import FadeLoader from "react-spinners/FadeLoader";

import { useSelector } from "react-redux"


export default function Quiz() {
  const loadingFetchQue = useSelector((state) => { return state.qNA.isLoading })

  return (
    <div className="w-full min-h-screen pt-24 pb-10 px-4">
      <div className={`${loadingFetchQue ? 'flex' : 'hidden'} absolute top-0 left-0 right-0 bottom-0 bg-neutral-600/55 backdrop-blur-sm justify-center items-center z-[100]`}>
        <FadeLoader loading={true} color="#06b6d4" size={150} />
      </div>
      <QuizCard />
      
    </div>
  )
}