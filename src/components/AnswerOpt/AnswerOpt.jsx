import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { setAnswer } from '../../redux/QnASlice';

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}


export default function AnswerOpt({ answerOptValue, answerOptIndex, questionIndex }) {
  const answer = useSelector((state) => { return state.qNA.answer })
  const timer = useSelector((state) => state.timer.value)

  const dispatch = useDispatch()

  function handleClickOpt() {
    if (answer[questionIndex] || timer == 0) {
      return
    }

    dispatch(setAnswer({ 'index': questionIndex, 'answer': answerOptValue }))
  }

  return (
    <>
      <div onClick={() => { handleClickOpt() }}
        className={
          `${answer[questionIndex] == answerOptValue ? 'bg-slate-300/80' :
            answer[questionIndex] && (answer[questionIndex] != answerOptValue) || timer == 0 ? 'bg-slate-200/50' :
              'hover:cursor-pointer bg-slate-300/50 hover:bg-slate-200/75'
          } 
            flex gap-5 justify-center items-center group relative transition-all`
        }
      >
        <div
          className={
            `${answer[questionIndex] == answerOptValue ? 'text-cyan-400' :
              answer[questionIndex] && (answer[questionIndex] != answerOptValue) || timer == 0 ?
                'text-slate-400/55' : 'text-slate-400/55 group-hover:text-cyan-400 transition-all'
            } absolute top-6 left-6 text-4xl font-medium`}
        >
          {
            answerOptIndex == 0 ? 'A' :
              answerOptIndex == 1 ? 'B' :
                answerOptIndex == 2 ? 'C' :
                  answerOptIndex == 3 ? 'D' : ''
          }
        </div>
        <label htmlFor={`no-0-${answerOptIndex}`}
          className={
            `${answer[questionIndex] == answerOptValue ? 'font-bold scale-105 text-neutral-800' :
              answer[questionIndex] && (answer[questionIndex] != answerOptValue) || timer == 0 ? 'text-neutral-600' :
                'group-hover:font-bold group-hover:scale-105 transition-all font-medium'
            } text-xl`
          }>
          {decodeHtmlEntities(answerOptValue)}
        </label>
      </div>
    </>
  )
}

AnswerOpt.propTypes = {
  answerOptValue: PropTypes.string,
  answerOptIndex: PropTypes.number,
  questionIndex: PropTypes.number
}
