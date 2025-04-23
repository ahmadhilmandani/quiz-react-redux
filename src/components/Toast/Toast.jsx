import { toast } from "react-toastify"

// eslint-disable-next-line react/prop-types
export default function SplitButtons({ isCorrect = false }) {

  if (isCorrect) {
    return (
      <div className="w-full">
        <strong className="text-emerald-500 block mb-1">
          Correct ✅
        </strong>
        <div className="text-neutral-600 mb-4">
          <strong className="text-neutral-600">{"Hilman"}</strong> is a <strong className="text-neutral-600">correct</strong> answer.
        </div>
        <div>
          <button className="py-2 px-6 rounded-md bg-emerald-500 w-full text-white font-medium">Next Question</button>
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
          <strong className="text-neutral-600">{"Hilman"}</strong> is a <strong className="text-neutral-600">correct</strong> answer.
        </div>
        <div>
          <button onClick={() => { toast.dismiss() }} className="py-2 px-6 rounded-md bg-rose-500 w-full text-white font-medium">Next Question</button>
        </div>
      </div>
    )
  }
}