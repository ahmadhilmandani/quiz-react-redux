import { useSelector } from "react-redux";

import FillButton from "../../components/button/FillButton"
import { IconArrowNarrowLeft, IconCheck, IconX } from "@tabler/icons-react";
import { useQuestionQuery } from "../../hooks/useQuestionQuery";

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}


export default function QUizResult() {
  const { data: listQnA } = useQuestionQuery()
  const score = useSelector((state) => state.score.value)

  const answer = useSelector((state) => { return state.qNA.answer })

  return (
    <div className="pt-32 pb-16 px-4">
      <h1 className="text-center text-cyan-500 text-4xl font-bold mb-3">
        Congratulation!
      </h1>
      <div className="text-center text-2xl font-bold mb-3">
        {score}
      </div>
      <small className="text-center text-neutral-500 block mb-8">
        your correct answer: {score / 10} / {listQnA.length}
      </small>
      {listQnA.map((valueOfQnA, index) => {
        return (
          <>
            <div key={`${index} - ${valueOfQnA?.question}`} className="max-w-[840px] w-full mx-auto bg-white px-8 py-6 border-b">
              <p className="mb-8">
                {index + 1}. {decodeHtmlEntities(valueOfQnA?.question)}
              </p>
              {
                valueOfQnA?.answerOpt.map((answerOptValue, answerOptIndex) => {
                  return (
                    <>
                      <div key={`${answerOptIndex} - ${answerOptValue}`} className={`flex gap-5 items-center cursor-pointer mb-5`}>
                        <div className={`${answer[index] == answerOptValue ? 'bg-cyan-500 border border-cyan-500 text-white font-bold' : 'border border-neutral-300'} 'flex justify-center items-center px-4 py-2 transition-all`} >
                          {answerOptIndex == 0 ? 'A' : answerOptIndex == 1 ? 'B' : answerOptIndex == 2 ? 'C' : 'D'}
                        </div>
                        <label htmlFor={`no-0-${answerOptIndex}`}>
                          {decodeHtmlEntities(answerOptValue)}
                        </label>
                        <IconCheck color="#22c55e" className={`${valueOfQnA.correct_answer == answerOptValue ? 'block' : 'hidden'}`} />
                        <IconX color="#ef4444" className={`${answer[index] != valueOfQnA.correct_answer && answer[index] == answerOptValue ? 'block' : 'hidden'}`} />
                      </div>
                    </>
                  )
                })
              }
            </div>
          </>
        )
      })}
      <div className="mx-auto w-fit mt-8">
        <FillButton onClickProp={() => {
          window.location.href = "/"
        }}>
          <IconArrowNarrowLeft />
          Go Back To Home
        </FillButton>
      </div>
    </div>
  )
}