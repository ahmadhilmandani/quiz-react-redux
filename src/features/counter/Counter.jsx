import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { incrementButAsync } from './counterSlice'

export default function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex gap-10'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementButAsync(5))}
        >
          Increment Async
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}