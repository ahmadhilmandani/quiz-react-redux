import Button from "../../components/button/Button"
import Navbar from "../../components/Navbar/Navbar"
export default function Home() {
  return (
    <div className="w-full min-h-screen relative bg-slate-100">
      <Navbar />
      <main className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="mb-10 font-medium text-5xl text-neutral-800">
          Are You Ready?
        </h1>
        <div className="flex gap-4">
          <Button>
            {`Let's`} Get it! 🔥
          </Button>
        </div>
      </main>
    </div>
  )

}