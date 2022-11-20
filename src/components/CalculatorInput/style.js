import styled from "styled-components";

export const Container = styled.div`
    width: 93%;

    display: flex;
    flex-direction: column;
    gap: 3px;

    .calculator-main-container__input--title {
        color: var(--grey-2);
        margin-left: 8px;
        font-size: 1rem;
    }

    .calculator-main-container__input--field {
        height: 25px;
        border-radius: 3px;
        padding-left: 7px;

        border: var(--grey-0) 1.2px solid;
    }

    .calculator-main-container__input--aditional {
        color: var(--grey-1);
        font-size: 0.8rem;
    }

    @media (min-width: 1024px) {
    .calculator-main-container__input--title {
        color: var(--grey-2);
        font-size: 1.2rem;
    }

    .calculator-main-container__input--field {
        height: 32px;
    }
    }
`