import React, { useState, useEffect } from "react";

const Animate = ({ children, doOpen, animationDuration }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [className, setClassName] = useState();

  const toggle = (action, delay) => {
    switch (action) {
      case "open":
        setClassName("open");
        setIsOpen(true);
        break;
      case "close":
        window.setTimeout(() => setClassName("closing"), 10);
        window.setTimeout(() => {
          setIsOpen(false);
        }, delay);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (doOpen) {
      toggle("open");
    } else {
      setClassName("closing-setup");
      toggle("close", animationDuration);
    }
  }, [doOpen, animationDuration]);

  return (
    isOpen && (
      <>
        {children.map((child, index) =>
          React.cloneElement(child, {
            className,
            key: index,
          })
        )}
      </>
    )
  );
};

export default Animate;
