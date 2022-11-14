import { Container } from "./style";

export function CalculatorInput({ title, aditionalInfo, inputType = "text", min, max }) {
    let input
    switch (inputType) {
        case ("text"):
            input = <input
                type={inputType}
                className="calculator-main-container__input--field"
            />
            break;
        case ("number"):
            input = <input
                type={inputType}
                className="calculator-main-container__input--field"
                min={min}
                max={max}
            />
            break;
        default:
            input = <input
                type={"text"}
                className="calculator-main-container__input--field"
            />
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Container onSubmit={handleSubmit}>
            <h3 className="calculator-main-container__input--title">{title}</h3>
            {input}
            {
                aditionalInfo &&
                <span className="calculator-main-container__input--aditional">{aditionalInfo}</span>
            }
        </Container>
    )
}