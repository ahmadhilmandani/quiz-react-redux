import { useNavigate } from "react-router-dom";
import FillButton from "../../components/button/FillButton"
import { IconArrowNarrowRight } from "@tabler/icons-react";
import heroImgBook from "../../assets/hero-img-book.png"
import blurBlueLight from "../../assets/blur-blue-light.png"
import '../../styles/hero-animation.css'
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="w-full min-h-screen flex justify-between items-center pt-32 pb-10 px-16 bg-slate-100 relative">
      <div className="w-full max-w-[560px]">
        <h1 className="mb-10 font-bold text-5xl text-cyan-500 leading-relaxed">
        Welcome to the Ultimate Quiz App!
        </h1>
        <p className="text-2xl mb-10 text-neutral-800 leading-relaxed">
        Enhance your learning experience by taking fun and informative quizzes. {`Let's`} get started!
        </p>
        <div className="flex gap-4 max-w-[240px] w-full">
          <FillButton onClickProp={() => {
            navigate('/quiz')
          }}>
            {`Let's`} Get it!  <IconArrowNarrowRight />
          </FillButton>
        </div>
      </div>
      <div className="">
        <img src={heroImgBook} alt="" className="max-w-[360px] w-full relative z-[2] hero-img" />
        <img src={blurBlueLight} alt="" className="absolute z-[1] bottom-0 right-0 w-full max-w-[720px]" />
      </div>
    </main>
  )
}