/* eslint-disable react/jsx-no-undef */
import { useToggle } from "../useToggle";

const ComponentB = () => {
    const { isOpen, open, close } = useToggle();
  
    return (
      <>
              <button onClick={open}>Open sidebar</button>
        <Sidebar isOpen={isOpen} onClose={close} />
      </>
    );
  };
  export default ComponentB