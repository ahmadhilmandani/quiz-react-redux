import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { incrementByAmount, increment } from './state/counter/counterSlice.ts'
import { useAppSelector, useAppDispatch } from './hooks.ts'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex gap-10 bg-red-50 items-center justify-center">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          count by 10 {count}
        </button>
      </div>
    </>
  )
}

export default App
