import { Container } from "./style";

// components
import { CalculatorInput } from "../CalculatorInput";

export function Calculator() {
    return (
        <Container>
            <div className="calculator-main-container">
                <h2 className="calculator-main-container__title">Simule sua Antecipação</h2>
                <CalculatorInput
                    className="calculator-main-container__input"
                    title={"Informe o valor da venda *"}
                    inputType={"money"}
                />
                <CalculatorInput
                    className="calculator-main-container__input"
                    title={"Em quantas parcelas? *"}
                    aditionalInfo={"Máximo de 12 parcelas"}
                    inputType={"number"}
                    min={1}
                    max={12}
                />
                <CalculatorInput
                    className="calculator-main-container__input"
                    title={"Informe o percentual de mdr *"}
                    inputType={"number"}
                    min={0}
                />

            </div>

            <div className="calculator-result">
                <h2 className="calculator-result__title">VOCÊ RECEBERÁ: </h2>
                <hr className="calculator-result__hr" />
                <p className="calculator-result__results">Amanhã: <b>R$0,00</b></p>
                <p className="calculator-result__results">Em 15 dias: <b>R$0,00</b></p>
                <p className="calculator-result__results">Em 30 dias: <b>R$0,00</b></p>
                <p className="calculator-result__results">Em 90 dias: <b>R$0,00</b></p>
            </div>
        </Container>
    )
}