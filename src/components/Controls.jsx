const handleLeftClick = () => {
  console.log("Left button clicked");
}
const handleRightClick = () => {
  console.log("Right button clicked");
}

const Controls = () => {
  return (
    <div>
      <button className="left" onClick={handleLeftClick}>{"<"}</button> <button className="right" onClick={handleRightClick}>{">"}  </button>
    </div>
  )
};

export default Controls;