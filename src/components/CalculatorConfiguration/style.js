import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`
const appearFromBottom = keyframes`
from {
    transform: translateY(50px);
}
to {
    transform: translateY(0px);
}
`

export const Container = styled.div`
    animation: ${fadeIn} 0.5s;

    width: 100vw;
    height: 115vh;

    background: rgba(0, 0, 0, 0.8);

    position: fixed;
    left: auto;
    right: auto;
    top: auto;
    bottom: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
`

export const Modal = styled.form`
    animation: ${appearFromBottom} 0.7s;

    height: 430px;
    width: 65vw;
    max-width: 500px;
    min-width: 285px;
    border-radius: 10px;
    padding: 15px;

    background: var(--grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;

    z-index: 2;

    .configuration-modal__title {
        display: flex;
        justify-content: space-between;
        width: 100%;

        margin-bottom: 1rem;
    }

    .configuration-modal__title--h3 {
        margin-left: 30px;
        color: var(--grey-2);
    }

    .configuration-modal__title--close {
        margin-right: 30px;
        display: flex;
        font-size: 1rem;
        color: var(--grey-2);

        &:hover {
            cursor: pointer;
            color: var(--grey-1);
            transition: 0.5s;
        }
    }
    .configuration-modal__inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }
    .configuration-modal__info {
        font-size: 0.8rem;
        color: var(--grey-1);
    }

    .configuration-modal__extra-title {
        color: var(--grey-2);
        margin-top: 1rem;
    }
    .configuration-modal__radio-input {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

`

export const SaveConfigButton = styled.input`
    padding: 3px 20%;
    margin-top: 30px;

    border: none;
    border-radius: 10px;

    background: var(--blue-0);
    color: var(--grey-0);

    &:hover {
        cursor: pointer;
        background: var(--blue-1);
        transition: 0.5s;
    }
    @media (min-width: 1024px) {
        margin-top: 10px;
    }

`
