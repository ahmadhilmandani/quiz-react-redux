export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-[72px] px-8 bg-slate-50 border-b shadow-lg shadow-slate-300/30 fixed top-0 left-0 right-0 z-50">
      <h1 className="font-bold text-2xl text-neutral-800">
        Quiz <span className="font-bold text-2xl text-cyan-500">App</span>
      </h1>

      <div className="text-gray-400 text-[14px]">
        10:00
      </div>
    </nav>
  )
}