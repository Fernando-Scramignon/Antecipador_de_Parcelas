import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes`
from {
    opacity: 0;
    transform: translateY(50px);
}

to {
    opacity: 1;
    transform: translateY(0px);
}

`
const appearFromTop = keyframes`
from {
    opacity: 0;
    transform: translateY(-50px);
}
to {
    opacity: 1;
    transform: translateY(0px);
}
`
export const CalculatorSubmitButton = styled.input`
    color: var(--blue-0);
    background: none;

    width: 15%;
    min-width: 53px;
    
    border: none;
    border-radius: 5px;
    padding: 2px;

    font-size: 0.8rem;

    &:hover {
        color: var(--blue-1);
        cursor: pointer;
        text-decoration: underline;
        transition: 0.3s;
    }
    &:disabled {
        color: var(--grey-1);
        cursor: not-allowed;
    }

    @media (min-width: 1024px) {
        font-size: 1.1rem;
    }
`

export const Container = styled.div`
    & {
        /* color */
        background: white;
        box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.1);
        
        /* size */
        height: 550px;
        width: 65%;
        min-width: 250px;
        max-width: 650px;

        /* border */
        border: 1.3px solid var(--grey-0);
        border-radius: 10px;

        /* flex */
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */

    }
    
    .calculator-main-container {
        /* size */
        height: 55%;
        /* max-width: 500px; */
        padding: 16px 0;
        animation: ${appearFromBottom} 1s;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        
        .calculator-main-container__title {
            color: var(--grey-2);
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 0.5rem;
        }

    }
    
    .calculator-result {
        animation: ${appearFromTop} 1s;

        background: var(--grey-0);

        border-radius: 10px;
        height: 45%;

        display: flex;
        flex-direction: column  ;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .calculator-result__title {
            color: var(--blue-0);
        }
        .calculator-result__hr {
            height: 1px;
            width: 80%;
            
            border: none;
            border-radius: 1px;
            background: var(--blue-0);
            
            margin-bottom: 0.8rem;
        }
        
        .calculator-result__results {
            color: var(--blue-0);
            
            b {
                color: var(--blue-1)
            }
        }
    }
    
    @media (min-width: 1024px) {
        & {
            flex-direction: row;
            max-width: 1600px;
        }
        
        .calculator-main-container {
            width: 60%;
            height: auto;

            justify-content: center;
            gap: 2.5rem;

            .calculator-main-container__title {
                font-size: 2.2rem;
        }
        }
        .calculator-result {
            width: 40%;
            height: auto;

            gap: 1.2rem;

            .calculator-result__results {
                font-size: 1.2rem;
            }
        }
    }
    
    `

export const ConfigButton = styled.button`
    height: 25px;
    width: 25px;

    display: flex;
    justify-content: center;
    align-items: center;


    background: var(--blue-0);
    color: var(--grey-0);

    /* padding: 2px; */
    margin-right: 15px;
    border: none;
    border-radius: 3px;

    align-self: flex-end;
    &:hover {
        cursor: pointer;
        background: var(--blue-1);
        transition: 0.3s;
    }
    
    @media (min-width: 1024px) {
        /* padding: 2px 8px; */

        position: relative;
        top: 130px;
    }
    
`

export const CalculatorDays = styled.div`

`