import { useState, useEffect } from "react";

const Darktheme = () => {
  const [color, setColor] = useState("white");
  const click = () => {
    setColor((prevColor) => (prevColor === "white" ? "gray" : "white"));
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <button onClick={click}>THEME</button>
    </div>
  );
};

export default Darktheme;
