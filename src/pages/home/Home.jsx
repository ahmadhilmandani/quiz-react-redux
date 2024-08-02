import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button"
export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-slate-100">
      <h1 className="mb-10 font-medium text-5xl text-neutral-800">
        Are You Ready?
      </h1>
      <div className="flex gap-4">
        <Button onClickProp={() => {
          navigate('/quiz')
        }}>
          {`Let's`} Get it! 🔥
        </Button>
      </div>
    </main>
  )

}