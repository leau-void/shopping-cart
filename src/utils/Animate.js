import React, { useState, useEffect } from "react";

const Animate = ({ children, doOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(doOpen);
  }, []);

  useEffect(() => {
    setIsOpen(doOpen);
  }, [doOpen]);

  return <>{isOpen && children}</>;
};

export default Animate;
