import React, { useEffect, useState } from "react";

const Cart = (props) => {
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(1);
  }, []);

  return (
    <div>
      Cart
      <div>{test}</div>
    </div>
  );
};

export default Cart;
