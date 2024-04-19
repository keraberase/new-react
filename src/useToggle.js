/* eslint-disable no-undef */
export const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
  
    const open = () => setIsOpen(true);
  
    const close = () => setIsOpen(false);
  
    return { isOpen, open, close };
  };