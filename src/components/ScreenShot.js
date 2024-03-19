import React, { useState, useRef } from "react";
import { useScreenshot } from "use-react-screenshot";

const ScreenShot = () => {
  const ref = useRef(null);
  const [isTaken, setIsTaken] = useState(false);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => {
    takeScreenshot(ref.current);
    setIsTaken(true);
  };
  const handleDownload = () => {
    
  }
  return (
    <div>
      <button onClick={getImage}>ScreenShot</button>
      {isTaken ? <img src={image} alt={"Screenshot"} /> : null}
      <div style={{ width: "100vw", height: "100vh" }} ref={ref}>
        <div>
          <h1>Rohit1</h1>
        </div>
      </div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default ScreenShot;
