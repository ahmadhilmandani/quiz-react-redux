import Modal from "../Modal/Modal";
import AnswerOpt from "../AnswerOpt/AnswerOpt";

import { setAnswer } from "../../redux/QnASlice";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useQuestionQuery } from "../../hooks/useQuestionQuery";
import SplitButtons from "../Toast/Toast";
import { toast } from "react-toastify";

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function QuizCard() {
  const answer = useSelector((state) => { return state.qNA.answer })

  // const [questionIndex, setQuestionIndex] = useState(0)

  // const [modalData, setModalData] = useState({
  //   isOpen: false,
  //   header: '',
  //   body: '',
  //   yesClickEvent: () => {

  //   },
  //   noClickEvent: () => {

  //   }
  // })

  const { data: listQnA, isLoading } = useQuestionQuery()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        Loading
      </div>
    )
  }

  return (
    <>
      {/* {
        modalData.isOpen &&
        <Modal modalHeader={modalData.header} yesClickEvent={modalData.yesClickEvent} noClickEvent={modalData.noClickEvent}>
          {modalData.body}
        </Modal>
      } */}
      <div className="py-8 px-10 relative mb-16">
        <div className="mb-6 flex items-center justify-between">
          <small className="block text-cyan-400 border-l-4 border-cyan-300 pl-2 text-2xl font-bold">
            Question {answer.length + 1}
            <small className="text-neutral-400/50 text-2xl"> / {listQnA.length}</small>
          </small>
          <small className="block text-neutral-700 text-xl px-6 py-2 bg-cyan-200 rounded-full font-semibold">Score : 100</small>
        </div>
        <p className="mb-8 text-4xl text-neutral-700">
          {decodeHtmlEntities(listQnA[answer.length]?.question)}
        </p>
        <div className="mb-3 text-neutral-500">
          Your answer is:
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-4 auto-rows-[120px] mb-16">
          {
            listQnA[answer.length]?.answerOpt.map((answerOptValue, answerOptIndex) => {
              return (
                <AnswerOpt key={`${answerOptIndex} - ${answerOptValue}`} answerOptValue={answerOptValue} answerOptIndex={answerOptIndex} questionIndex={answer.length} correcctAnswer={listQnA[answer.length].correct_answer} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}