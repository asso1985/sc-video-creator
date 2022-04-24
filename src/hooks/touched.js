import { useState } from "react";

const useTouched = () => {
  const [touched, setTouched] = useState({});


  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  return [touched, handleBlur];
};

export default useTouched;
