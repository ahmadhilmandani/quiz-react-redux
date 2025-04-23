/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function AnswerOpt({ answerOptValue, answerOptIndex, isLastIndex, questionIndex, clickSetAnswer }) {
  const userAnswer = useSelector((state) => { return state.qNA.answer })
  return (
    <>
      <div onClick={clickSetAnswer} className={`flex gap-5 justify-center items-center cursor-pointer group group-hover:cursor-pointer bg-slate-300/50 hover:bg-slate-200 relative transition-all`}>
        <div className='absolute top-6 left-6 text-4xl font-medium text-slate-400/55 group-hover:text-cyan-400 transition-all'>
          {
            answerOptIndex == 0 ? 'A' :
              answerOptIndex == 1 ? 'B' :
                answerOptIndex == 2 ? 'C' :
                  answerOptIndex == 3 ? 'D' : ''
          }
        </div>
        <label htmlFor={`no-0-${answerOptIndex}`} className="group-hover:font-bold group-hover:cursor-pointer group-hover:scale-150 transition-all text-neutral-800 font-medium text-xl">
          {decodeHtmlEntities(answerOptValue)}
        </label>
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
