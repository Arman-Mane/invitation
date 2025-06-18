import { useEffect } from "react";

const InspectElemDis = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + Shift + I;
      // if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
      //   e.preventDefault();
      // }

      // F12 (open DevTools)
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // document.addEventListener("mousedown", (e) => {
    //   e.preventDefault();
    // });
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return null; // this component doesn't render anything
};

export default InspectElemDis;
