import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    --grey-0: #f0f2f0;
    --grey-1: #999999;
    --grey-2: #666666;

    --blue-0: #3385ff;
    --blue-1: #0066ff;
}

input {
    outline: none;
}
`