import { Container } from "./style";
import CurrencyInput from "react-currency-input-field";


export function CalculatorInput({ title, aditionalInfo, inputType = "number", min = 0, max, placeholder, isRequired = true }) {
    let input
    switch (inputType) {
        case ("money"):
            input = <CurrencyInput
                className="calculator-main-container__input--field"
                decimalsLimit={2}
                intlConfig={{ locale: "pt-BR", currency: "BRL" }}
                required={isRequired}
                maxLength={9}
            />
            break;
        case ("number"):
            input = <input
                type={inputType}
                className="calculator-main-container__input--field"
                min={min}
                max={max}
                required={isRequired}
                placeholder={placeholder}
            />
            break;
        default:
            input = <input
                type={"number"}
                className="calculator-main-container__input--field"
                required={isRequired}
                min={min}
                max={max}
            />
    }


    return (
        <Container>
            <h3 className="calculator-main-container__input--title">{title}</h3>
            {input}
            {
                aditionalInfo &&
                <span className="calculator-main-container__input--aditional">{aditionalInfo}</span>
            }
        </Container>
    )
}