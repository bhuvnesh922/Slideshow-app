
import Controls from "./Controls"
import Slide from "./Slide"
import "./style.css"

const image = {
  url: "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg",
  altName: "Cathedral"
}
const Slideshow = () => {
  return (
    <div className="slideshow-container">
      This is SlideShow
      <Slide image={image}/>
     <Controls />
    </div>
  ) 
}
export default Slideshow;
