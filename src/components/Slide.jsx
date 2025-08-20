
import "./style.css"
const Slide = ({image}) => {
  return (
    <div className="slide">
      <img src={image?.url} alt={image?.atlName} />
    </div>
  )
}
export default Slide;