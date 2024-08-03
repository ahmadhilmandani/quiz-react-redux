/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function AnswerOpt({ answerOptValue, answerOptIndex, isLastIndex, questionIndex, clickSetAnswer }) {
  const userAnswer = useSelector((state)=>{return state.qNA.answer})
  return (
    <>
      <div onClick={clickSetAnswer} className={`${isLastIndex == true ? 'mb-20' : 'mb-5'} flex gap-5 items-center cursor-pointer group group-hover:cursor-pointer`}>
        {/* <input type="radio" name={`no-0`} id={`no-0-${answerOptIndex}`} value={answerOptValue} className="hidden" /> */}
        <div className={`${userAnswer[questionIndex] == answerOptValue ? 'bg-cyan-500 text-white font-bold' : 'border border-neutral-300 group-hover:bg-neutral-300'} 'flex justify-center items-center px-4 py-2 transition-all`} >
          {answerOptIndex == 0 ? 'A' : answerOptIndex == 1 ? 'B' : answerOptIndex == 2 ? 'C' : 'D'}
        </div>
        <label htmlFor={`no-0-${answerOptIndex}`} className="group-hover:font-bold group-hover:cursor-pointer">{decodeHtmlEntities(answerOptValue)}</label>
      </div>
    </>
  )

}


AnswerOpt.propTypes = {
  answerOptValue: PropTypes.string,
  answerOptIndex: PropTypes.number,
  questionIndex: PropTypes.number,
  isLastIndex: PropTypes.bool,
  clickSetAnswer: PropTypes.func
}
