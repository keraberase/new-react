import { useState, useEffect } from "react";

const useId = () => {
  const [id, setId] = useState("");

  // Generate a unique identifier
  useEffect(() => {
    setId(Math.random().toString(36).substring(7));
  }, []);

  return id;
};

export default useId;