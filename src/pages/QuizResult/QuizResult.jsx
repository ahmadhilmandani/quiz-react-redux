import { useSelector } from "react-redux";
import { useState } from "react";

import FillButton from "../../components/button/FillButton"
import { IconArrowNarrowLeft, IconCheck, IconX } from "@tabler/icons-react";

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}


export default function QUizResult() {
  const QnA = useSelector((state) => { return state.qNA.question })
  const answer = useSelector((state) => { return state.qNA.answer })

  const [finalResult] = useState(() => {
    let tempt = 0
    for (let index = 0; index < QnA.length; index++) {
      if (QnA[index].correct_answer == answer[index]) {
        tempt = tempt + 1
      }
    }
    return tempt
  })


  return (
    <div className="pt-32 pb-16">
      <h1 className="text-center text-cyan-500 text-4xl font-bold mb-3">
        Congratulation!
      </h1>
      <div className="text-center text-2xl font-bold mb-3">
        {finalResult / QnA.length * 100}
      </div>
      <small className="text-center text-neutral-500 block mb-8">
        your correct answer: {finalResult} / {QnA.length}
      </small>
      <div className="text-center mb-2 text-xl font-semibold">
        {'"Success does not belong to smart people. Success belongs to those who keep trying"'}
      </div>
      <small className="text-center block mb-8">
        - BJ Habibie -
      </small>
      <div className="mx-auto w-fit mb-3">
        <FillButton onClickProp={() => {
          window.location.href = "/";
        }}>
          <IconArrowNarrowLeft />
          Go Back To Home
        </FillButton>
      </div>
      <small className="text-center text-neutral-500 block mb-3">
        or
      </small>
      <div className="text-center block mb-8">
        See your test result
      </div>
      {QnA.map((valueOfQnA, index) => {
        return (
          <>
            <div className="max-w-[640px] w-full mx-auto bg-white px-8 py-6 border-b">
              <p className="mb-8">
                {index + 1}. {decodeHtmlEntities(valueOfQnA?.question)}
              </p>
              {
                valueOfQnA?.answerOpt.map((answerOptValue, answerOptIndex) => {
                  return (
                    <>
                      <div className={`${answerOptIndex == valueOfQnA?.answerOpt.length ? 'mb-20' : 'mb-5'} flex gap-5 items-center cursor-pointer`}>
                        <div className={`${answer[index] == answerOptValue ? 'bg-cyan-500 text-white font-bold' : 'border border-neutral-300'} 'flex justify-center items-center px-4 py-2 transition-all`} >
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