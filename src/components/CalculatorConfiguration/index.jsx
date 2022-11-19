import { Container, Modal, SaveConfigButton } from "./style"
import { CalculatorInput } from "../CalculatorInput"
import { ConfigRadioInput } from "../ConfigRadioInput"

import { AiOutlineClose } from "react-icons/ai"

export function CalculatorConfiguration({ days, setDays, alternateConfigModal }) {
    function handleSubmit(event) {
        event.preventDefault()

        let inputsValues = [...days]
        const inputsArr = document.getElementById("config-modal-inputs").children
        for (let i = 0; i < inputsArr.length; i++) {
            const value = inputsArr[i].children[1].value
            if (value) {
                inputsValues[i] = parseInt(value)
            }
        }
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

                <h3 className="configuration-modal__extra-title">Configurações extras</h3>
                <div className="configuration-modal__radio-input">
                    <ConfigRadioInput nameType="Timeout" />
                    <ConfigRadioInput nameType="Server Error" />
                </div>
                <CalculatorInput isRequired={false} aditionalInfo={"Atraso de resposta"} placeholder={"milisegundos"} inputType={"number"} />
                <SaveConfigButton type={"submit"} value="Salvar" />
            </Modal>
        </Container>
    )
}