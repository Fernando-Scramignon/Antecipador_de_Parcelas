import { Container } from "./style";

export function ConfigRadioInput({ nameType = "timeout" }) {
    return (
        <Container>
            <label htmlFor={nameType}>{nameType}</label>
            <input type="radio" name="config-radio-input" value={nameType} />
        </Container>
    )
}