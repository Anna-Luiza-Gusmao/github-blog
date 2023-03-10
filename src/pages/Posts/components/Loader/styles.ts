import styled, { keyframes } from "styled-components"

const pulse = keyframes`
    0%,
    100% {
      transform: scale(0);
      opacity: 0.5;
    }
  
    50% {
      transform: scale(1);
      opacity: 1;
    }
`

export const LoaderContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export const DotSpinner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 2.8rem;
    width: 2.8rem;
` 
  
export const DotSpinnerDot = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;

    ::before {
        content: '';
        height: 20%;
        width: 20%;
        border-radius: 50%;
        background-color: ${props => props.theme.blue};
        transform: scale(0);
        opacity: 0.5;
        animation: ${pulse} calc(0.9s * 1.111) ease-in-out infinite;
        box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
    }

    :nth-child(2) {
        transform: rotate(45deg);
    }
    :nth-child(2)::before {
        animation-delay: calc(0.9s * -0.875);
    }
    :nth-child(3) {
        transform: rotate(90deg);
    }
    :nth-child(3)::before {
        animation-delay: calc(0.9s * -0.75);
    }
    :nth-child(4) {
        transform: rotate(135deg);
    }
    :nth-child(4)::before {
        animation-delay: calc(0.9s * -0.625);
    }
    :nth-child(5) {
        transform: rotate(180deg);
    }
    :nth-child(5)::before {
        animation-delay: calc(0.9s * -0.5);
    }
    :nth-child(6) {
        transform: rotate(225deg);
    }
    :nth-child(6)::before {
        animation-delay: calc(0.9s * -0.375);
    }
    :nth-child(7) {
        transform: rotate(270deg);
    }
    :nth-child(7)::before {
        animation-delay: calc(0.9s * -0.25);
    }
    :nth-child(8) {
        transform: rotate(315deg);
    }
    :nth-child(8)::before {
        animation-delay: calc(0.9s * -0.125);
    }
` 