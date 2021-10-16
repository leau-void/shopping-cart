import styled, { css, keyframes } from "styled-components";

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

const animationRemoveFromCartButton = keyframes`
0% {
  transform: rotateX(0deg)
}
50% {
  transform: rotateX(180deg)
}
100% {
  transform: rotateX(0deg)
}
`;

const animationRuleRemoveFromCartButton = css`
  ${animationRemoveFromCartButton} 2s infinite alternate
`;

export {
  animationRuleAddToCartButtonEnter,
  animationRuleAddToCartButtonExit,
  animationRuleRemoveFromCartButton,
};
