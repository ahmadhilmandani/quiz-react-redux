import FillButton from "../button/FillButton";
import OutlineButton from "../button/OutlineButton";
import Modal from "../Modal/Modal";
import AnswerOpt from "../AnswerOpt/AnswerOpt";

import { setAnswer } from "../../features/QnASlice";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

export default function QuizCard() {
  const navigate = useNavigate()
  const [questionIndex, setQuestionIndex] = useState(0)
  const QnA = useSelector((state) => { return state.qNA.question })
  const dispatch = useDispatch()

  const [modalData, setModalData] = useState({
    isOpen: false,
    header: '',
    body: '',
    yesClickEvent: () => {

    },
    noClickEvent: () => {

    }
  })

  return (
    <>
      {modalData.isOpen &&
        <Modal modalHeader={modalData.header} yesClickEvent={modalData.yesClickEvent} noClickEvent={modalData.noClickEvent}>
          {modalData.body}
        </Modal>
      }
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
          <OutlineButton onClickProp={() => {
            if (questionIndex != 0) {
              setQuestionIndex(() => { return questionIndex - 1 })
            } else {
              setModalData({
                isOpen: true,
                header: 'Are you Sure You Want to Go Back to Homepage?',
                body: "If you go back to homepage, all the question you answered will gone. is this fine to you, please click 'yes'",
                yesClickEvent: () => {
                  window.location.href = "/";
                },
                noClickEvent: () => {
                  setModalData({ ...modalData, isOpen: false })
                }
              })
            }
          }}>
            <IconArrowNarrowLeft className="text-cyan-500" />
            {questionIndex == 0 ? 'Back To Home' : 'Prev'}
          </OutlineButton>
          <FillButton onClickProp={() => {
            if (questionIndex != QnA.length - 1) {
              setQuestionIndex(() => { return questionIndex + 1 })
            } else {
              setModalData({
                isOpen: true,
                header: 'Are you Sure to Finish?',
                body: "Only finish the quiz when you 100% believe of your answer",
                yesClickEvent: () => {
                  navigate('/quiz/result')
                },
                noClickEvent: () => {
                  setModalData({ ...modalData, isOpen: false })
                }
              })
            }
          }}>
            {questionIndex == QnA.length - 1 ? 'Finish Quiz' : 'Next'}
            <IconArrowNarrowRight />
          </FillButton>
        </div>
      </div>
    </>
  )
}