import { css, keyframes } from "styled-components";

const animationVisitShopEnter = keyframes`
0% {
  right:300px;
}
100% {
  right: 1rem;
}
`;

const animationVisitShopColor = keyframes`
0% {
  color: #eeeeee;
}
33% {
  color: #393E46;
}
40% {
  color: #393E46;
}
66% {
  color: #00dae6;
}
72% {
  color: #00dae6;
}
100% {
  color: #222831;
}
`;

const animationRuleVisitShop = css`
  ${animationVisitShopEnter} 1s ease-out forwards,
    ${animationVisitShopColor} 2s alternate 0.8s infinite
`;

const animationAddToCartButtonEnter = keyframes`
  25% {
    transform: translateX(6%)
  }
  50% {
transform: translateX(-4%)
  }

  75% {
transform: translateX(2%)
  }

  100% {
transform: translateX(0)
}
`;

const animationRuleAddToCartButtonEnter = css`
  ${animationAddToCartButtonEnter} 1s ease-in-out 0.3s normal forwards;
`;

const animationAddToCartButtonExit = keyframes`
  form {
    opacity: 1;
    transform: translate(0, 0)
  }

  to {
    opacity: 0;
    transform: translateY(-100vh) rotate(45deg);
  }
`;

const animationRuleAddToCartButtonExit = css`
  ${animationAddToCartButtonExit} 1s ease-in normal forwards;
`;

const animationOpenCart = keyframes`
0% {
  right: -100%;
}
100% {
  right: 0;
}
`;

const animationRuleOpenCart = css`
  ${animationOpenCart} 0.7s ease-in-out forwards
`;

const animationOpenCartBg = keyframes`
0% {
  left: -100%;
}
100% {
  left: 0;
}
`;

const animationRuleOpenCartBg = css`
  ${animationOpenCartBg} 0.7s ease-in-out forwards
`;

export {
  animationRuleAddToCartButtonEnter,
  animationRuleAddToCartButtonExit,
  animationRuleOpenCart,
  animationRuleOpenCartBg,
  animationRuleVisitShop,
};
