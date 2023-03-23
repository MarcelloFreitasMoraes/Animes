import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    // Fonts
    --ff-default: 'Arial ', sans-serif;

// Colors
    --primary: #F46D1B;
    --secundary: #34AC40;

    --black: #000000;
    --background: #262626;
    --light: #D9D9D9;
    --transparent: rgba(0, 0, 0, 0.8);

    --font-size-large: 22px;
    --font-size-regular: 15px;
    --font-size-small: 18px;

    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
    }
    body {
        width: 100%;
        //max-width: 1920px;
        margin: 0 auto;
    }
    textarea, button, a, h1, h2, h3 {
        font-family: var(--ff-default);
        color: var(--primary);
    }
    h1, h2 {
        font-family: var(--ff-default);
    }
    p {
        font-family: var(--ff-default);
    }
    a {
        color: inherit;
    }
    .container {
        width: 100%;
        margin: 0 auto;
    }
`;