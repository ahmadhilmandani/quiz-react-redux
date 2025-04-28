import { useSelector } from "react-redux"

export default function Navbar() {
  const timer = useSelector((state) => state.timer.value)
  const isActive = useSelector((state) => state.timer.isActive)

  return (
    <nav className="flex justify-between items-center h-20 px-16 bg-slate-50 border-b shadow-lg shadow-slate-300/30 fixed top-0 left-0 right-0 z-50">
      <h1 className="font-bold text-2xl text-neutral-800">
        Quiz <span className="font-bold text-2xl text-cyan-500">App</span>
      </h1>
      {
        isActive &&
        <div className={`${timer < 5 ? 'text-rose-500' : 'text-gray-800'} text-2xl flex-1 text-center`}>
          {timer}
        </div>
      }
    </nav>
  )
}