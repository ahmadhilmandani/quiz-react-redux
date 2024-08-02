import PropTypes from 'prop-types';

export default function OutlineButton({ children, onClickProp }) {
  return (
    <button onClick={onClickProp} className="w-full flex justify-center items-center gap-2 px-4 py-1 border border-cyan-500 text-cyan-500 font-bold hover:bg-cyan-50/50 transition-all">
      { children }
    </button>
  )
}

OutlineButton.propTypes = {
  children: PropTypes.array,
  onClickProp: PropTypes.func,
}