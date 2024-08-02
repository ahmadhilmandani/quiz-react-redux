import Button from "../button/Button";
import AnswerOpt from "../AnswerOpt/AnswerOpt";

import { setAnswer } from "../../features/QnASlice";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function QuizCard() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const QnA = useSelector((state) => { return state.qNA.question })
  const dispatch = useDispatch()

  return (
    <>
      <div className="py-8 px-10 bg-slate-50 shadow-lg max-w-[640px] w-full relative">
        <div className="mb-2 flex items-center justify-between">
          <small className="block text-cyan-300 border-l-4 border-cyan-200 pl-2 text-sm">Question {questionIndex + 1}</small>
          <small className="block text-neutral-400 text-sm">{questionIndex + 1} / {QnA.length}</small>
        </div>
        <p className="mb-8">
          {decodeHtmlEntities(QnA[questionIndex]?.question)}
        </p>
        {
          QnA[questionIndex]?.answerOpt.map((answerOptValue, answerOptIndex) => {
            return (
              <>
                <AnswerOpt clickSetAnswer={() => { dispatch(setAnswer({ index: questionIndex, answer: answerOptValue })) }} questionIndex={questionIndex} answerOptValue={answerOptValue} answerOptIndex={answerOptIndex} isLastIndex={answerOptIndex == QnA[questionIndex]?.answerOpt.length - 1 ? true : false} />
              </>
            )
          })
        }
        <div className="flex gap-5 absolute bottom-5 left-5 right-5">
          <Button onClickProp={() => {
            if (questionIndex != 0) {
              setQuestionIndex(() => { return questionIndex - 1 })
            }
          }}>
            Prev ⬅️
          </Button>
          <Button onClickProp={() => {
            if (questionIndex != QnA.length - 1)
              setQuestionIndex(() => { return questionIndex + 1 })
          }}>
            Next ➡️
          </Button>
        </div>
      </div>
    </>
  )
}