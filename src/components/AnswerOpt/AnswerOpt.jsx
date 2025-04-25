/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { setAnswer } from '../../redux/QnASlice';
import SplitButtons from '../Toast/Toast';
import { toast } from 'react-toastify';
import { useQuestionQuery } from '../../hooks/useQuestionQuery';

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function AnswerOpt({ answerOptValue, answerOptIndex, questionIndex, correcctAnswer }) {
  const { data: listQnA, isLoading } = useQuestionQuery()
  const answer = useSelector((state) => { return state.qNA.answer })
  
  const dispatch = useDispatch()

  function evaluateAnswer() {
    dispatch(setAnswer({ 'index': questionIndex, 'answer': answerOptValue }))
    if (correcctAnswer == answer[questionIndex]) {
      toast(SplitButtons, {
        closeButton: false,
        className: 'p-4 min-w-[320px] max-w-[640px] w-screen border border-emerald-600/40',
        ariaLabel: 'Email received',
      });
    
    }
  } 

  return (
    <>
      <div onClick={() => { evaluateAnswer() }} className={`flex gap-5 justify-center items-center cursor-pointer group group-hover:cursor-pointer bg-slate-300/50 hover:bg-slate-200 relative transition-all`}>
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
  correcctAnswer : PropTypes.string | PropTypes.bool
}
