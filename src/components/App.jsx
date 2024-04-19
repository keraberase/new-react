/* eslint-disable react/display-name */
import { forwardRef, useRef, useEffect } from "react";
import "./App.css"; // Assuming you have a CSS file for styling

const CustomButton = forwardRef((props, ref) => (
  <button ref={ref} className="blueButton">{props.children}</button>
));

const App = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
};

export default App;

