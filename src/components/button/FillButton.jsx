import PropTypes from 'prop-types';

export default function FillButton({ children, onClickProp }) {
  return (
    <button onClick={onClickProp} className="w-full flex justify-center items-center gap-2 px-4 py-1 bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-all">
      { children }
    </button>
  )
}

FillButton.propTypes = {
  children: PropTypes.array,
  onClickProp: PropTypes.func,
}