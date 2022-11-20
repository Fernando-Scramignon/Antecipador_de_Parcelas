import { Container, CalculatorSubmitButton, ConfigButton } from "./style";
import { useState, useEffect } from "react";

import axios from "axios";
import { BiCog } from "react-icons/bi"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

// components
import { CalculatorInput } from "../CalculatorInput";
import { CalculatorConfiguration } from "../CalculatorConfiguration";

import { intToMoneyBRL } from "../../utils";

export function Calculator() {
    const [isConfigOpen, setIsConfigOpen] = useState(false)

    const [days, setDays] = useState([1, 15, 30, 90])
    const [values, setValues] = useState([])
    const [requestParams, setRequestParams] = useState({})


    useEffect(() => {
        const newValues = days.map((day) => 0)
        setValues(newValues)
    }, [, days])

    async function axiosRequest(amount, installments, mdr, days, button) {

        const base_url = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app"
        await toast.promise(

            axios.post(
                base_url,
                {
                    amount: amount,
                    installments: installments,
                    mdr: mdr,
                    days
                }, {
                params: requestParams
            }
            )
                .then(function (response) {
                    const { data } = response
                    const newValues = Object.values(data)
                    setValues(newValues)
                }
                ),
            {
                pending: {
                    render() {
                        return "Carregando"
                    },
                    onOpen: () => button.disabled = true
                },
                success: {
                    render() {
                        return "Requisição feita com sucesso"
                    },
                    onOpen: () => button.disabled = true,
                    onClose: () => button.disabled = false
                },
                error: {
                    render({ data }) {
                        const errorMessages = {
                            "Internal Server Error": "Erro interno do servidor",
                            "Timeout": "Conexão expirou"
                        }
                        return errorMessages[data?.response?.data?.message || "algo deu errado"]
                    },
                    onClose: () => button.disabled = false
                }
            }

        )
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const amount = parseInt(event.target.children[1].children[1].value
            .replace("R$", "").replace(".", "").replace(",", ".").trimStart())
        const installments = event.target.children[2].children[1].value
        const mdr = event.target.children[3].children[1].value

        const button = event.target.children[4]
        await axiosRequest(amount, installments, mdr, days, button)
        toast.clearWaitingQueue()

    }

    function onClickDebug(e) {
        console.log("debug")
    }

    function alternateConfigModal() {
        !isConfigOpen ? setIsConfigOpen(true) : setIsConfigOpen(false)
    }

    return (
        <>
            {isConfigOpen && <CalculatorConfiguration
                days={days}
                setDays={setDays}
                alternateConfigModal={alternateConfigModal}
                requestParams={requestParams}
                setRequestParams={setRequestParams}
            />}
            <Container  >
                <form className="calculator-main-container" onSubmit={handleSubmit}>
                    <h2 onClick={onClickDebug} className="calculator-main-container__title">Simule sua Antecipação</h2>
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
                        max={100}
                    />
                    <CalculatorSubmitButton type="submit" value="submit" />
                </form>

                <div className="calculator-result">
                    <h2 className="calculator-result__title">VOCÊ RECEBERÁ: </h2>
                    <hr className="calculator-result__hr" />

                    {values && days.map((day, index) => {
                        if (day === 1) day = "Amanhã"

                        let msg = `Em ${day} dias: `
                        if (day === "Amanhã") {
                            msg = `${day}: `
                        }
                        let value
                        value = intToMoneyBRL.format(values[index])

                        msg = msg + value


                        return (
                            values &&
                            <p key={index} className="calculator-result__results">
                                {msg}
                            </p>
                        )
                    })}

                    <ConfigButton onClick={alternateConfigModal}><BiCog fontSize={"1.1rem"} /></ConfigButton>
                </div>
            </Container>
        </>
    )
}