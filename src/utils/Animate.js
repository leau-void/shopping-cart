import React, { useState, useEffect } from "react";

const Animate = ({ children, doOpen, animationDuration }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (doOpen) {
      setIsOpen(doOpen);
    } else {
      window.setTimeout(() => setIsOpen(doOpen), animationDuration);
    }
  }, [doOpen]);

  return (
    isOpen && (
      <>
        {children.map((child, index) =>
          React.cloneElement(child, {
            className: doOpen ? "open" : "closing",
            key: index,
          })
        )}
      </>
    )
  );
};

export default Animate;
