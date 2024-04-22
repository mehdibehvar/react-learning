
const Button = ({btnClass,btnText='button'}) => {
  return (
        <button className={`btn ${btnClass}`}>{btnText}</button>
  )
}
export default Button