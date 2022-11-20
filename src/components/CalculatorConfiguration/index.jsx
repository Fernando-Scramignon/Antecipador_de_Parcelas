import { Container, Modal, SaveConfigButton } from "./style"
import { CalculatorInput } from "../CalculatorInput"
import { ConfigRadioInput } from "../ConfigRadioInput"

import { AiOutlineClose } from "react-icons/ai"

export function CalculatorConfiguration({ days, setDays, alternateConfigModal, requestParams, setRequestParams }) {
    function handleSubmit(event) {
        event.preventDefault()

        // gets input values
        let inputsValues = [...days]
        const inputsArr = document.getElementById("config-modal-inputs").children
        for (let i = 0; i < inputsArr.length; i++) {
            const value = inputsArr[i].children[1].value
            if (value && !inputsValues.find(input => input === parseInt(value))) {
                inputsValues[i] = parseInt(value)
            }
        }

        let newRequestParams = {}

        // gets radio input value
        let radioInputSelectedOption = document.querySelector('input[name="config-radio-input"]:checked').value.toLowerCase()
        if (radioInputSelectedOption === "server error") radioInputSelectedOption = "internalError"
        if (radioInputSelectedOption && radioInputSelectedOption !== "Nenhum") {
            newRequestParams[radioInputSelectedOption] = true
        }

        // gets request delay input
        let responseDelay = event.target.children[5].children[1].value
        if (responseDelay) {
            newRequestParams["delay"] = parseInt(responseDelay)
        }


        setRequestParams(newRequestParams)
        setDays(inputsValues)
        alternateConfigModal()
    }


    return (
        <Container onClick={(e) => console.log(days)}>
            <Modal className="configuration-modal" onSubmit={handleSubmit}>
                <div className="configuration-modal__title">
                    <h3 className="configuration-modal__title--h3">Selecione os dias</h3>
                    <AiOutlineClose className="configuration-modal__title--close" onClick={alternateConfigModal} />
                </div>
                <div id="config-modal-inputs" className="configuration-modal__inputs">
                    {days.map((day, index) => <CalculatorInput
                        key={index}
                        placeholder={"Escolha um dia"}
                        isRequired={false}
                    />)}
                </div>
                <span className="configuration-modal__info">Os dias não podem ser repetidos</span>

                <h3 className="configuration-modal__extra-title">Configurações extras</h3>
                <div className="configuration-modal__radio-input">
                    <ConfigRadioInput nameType="Nenhum" defaultChecked />
                    <ConfigRadioInput nameType="Timeout" />
                    <ConfigRadioInput nameType="Server Error" />
                </div>
                <CalculatorInput
                    id="delay-input"
                    title={"Atraso de resposta"}
                    isRequired={false}
                    aditionalInfo={"Atraso de resposta"}
                    placeholder={"milisegundos"}
                    inputType={"number"}
                />
                <SaveConfigButton type={"submit"} value="Salvar" />
            </Modal>
        </Container>
    )
}