import PropTypes from "prop-types";
import AnswerOpt from "../AnswerOpt/AnswerOpt";

import { useSelector } from "react-redux";
function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function QuizCard({ listQnA }) {
  const currentQuestionIndex = useSelector((state) => { return state.qNA.currentQuestionIndex })
  const score = useSelector((state) => { return state.score.value })

  return (
    <>
      <div className="py-8 px-10 relative mb-16">
        <div className="mb-6 flex items-center justify-between">
          <small className="block text-cyan-400 border-l-4 border-cyan-300 pl-2 text-2xl font-bold">
            Question {currentQuestionIndex + 1}
            <small className="text-neutral-400/50 text-2xl"> / {listQnA.length}</small>
          </small>
          <small className="block text-neutral-700 text-xl px-6 py-2 bg-cyan-200 rounded-full font-semibold">Score : {score}</small>
        </div>
        <p className="mb-8 text-4xl text-neutral-700 leading-[165%]">
          {decodeHtmlEntities(listQnA[currentQuestionIndex]?.question)}
        </p>
        <div className="mb-3 text-neutral-500">
          Your answer is:
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4 auto-rows-[120px] mb-16">
          {
            listQnA[currentQuestionIndex]?.answerOpt.map((answerOptValue, answerOptIndex) => {
              return (
                <AnswerOpt key={`${answerOptIndex} - ${answerOptValue}`} answerOptValue={answerOptValue} answerOptIndex={answerOptIndex} questionIndex={currentQuestionIndex} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

QuizCard.propTypes = {
  listQnA: PropTypes.obj
}