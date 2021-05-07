import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        border: 0px;
    }

    /* Remove default margin and padding */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
        list-style: none;   
    }

    /* Set core root defaults (i.e., 1rem = 10px) */
    html {
        font-size: 62.5%;
    }

    /* Set core body defaults */
    body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        text-rendering: optimizeSpeed;
        font-family: 'Kumbh Sans', sans-serif;
        background-color: ${(props) => props.theme.background.page};
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove highlight around form elements */
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    h1 {
        color: ${(props) => props.theme.text.headings};
        font-size: 2rem;
        line-height: 2rem;
        font-weight: 700;
    }

    h2 {
        color: ${colors.violet};
        font-size: 1.4rem;
        line-height: 1.4rem;
        font-weight: 700;
    }

    h3 {
        color: ${colors.darkGrey};
        font-size: 1.6rem;
        line-height: 1.6rem;
        font-weight: 400;
    }

    p {
        color: ${colors.darkGrey};
        font-size: 1.6rem;
        line-height: 1.6rem;
        font-weight: 400;
    }
`;
