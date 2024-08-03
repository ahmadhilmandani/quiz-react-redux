/* eslint-disable react/prop-types */
import FillButton from "../button/FillButton"
import OutlineButton from "../button/OutlineButton"

export default function Modal({ modalHeader, children, yesClickEvent, noClickEvent }) {
  return (
    <>
      <div className="flex absolute top-0 left-0 right-0 bottom-0 bg-neutral-600/55 backdrop-blur-sm justify-center items-center z-[100]">
        <div className="max-w-[424px] w-full bg-white px-8 py-14 shadow-lg">
          <h1 className="text-center text-cyan-500 text-2xl font-bold mb-5">
            {modalHeader}
          </h1>
          <p className="mb-7 text-center">
            {children}
          </p>
          <div className="mb-3">
            <OutlineButton onClickProp={noClickEvent}>
              No
            </OutlineButton>
          </div>
          <div className="">
            <FillButton onClickProp={yesClickEvent}>
              Yes
            </FillButton>
          </div>
        </div>
      </div>
    </>
  )

}