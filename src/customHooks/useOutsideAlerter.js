import { useState, useEffect } from "react";

const useOutsideAlerter = (refMain) => {
  const [outside, setOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (refMain.current && !refMain.current.contains(e.target)) {
        setOutside(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refMain]);

  return outside;
};

export default useOutsideAlerter;
