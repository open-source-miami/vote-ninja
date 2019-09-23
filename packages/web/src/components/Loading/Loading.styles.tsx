import styled, { keyframes, css } from "styled-components";

const jump = keyframes`
0% {
    transform: translateY(0em);
    opacity: 0;
}
50% {
    transform: translateY(-0.75em);
    opacity: 1;
}
`

export const LoadingContainer = styled.div<{ isLoading: boolean }>`
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    display: block;
    width: 400px;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: translateY(${p => p.isLoading ? "0%" : "-100%"});
    transition: transform 0.5s ease-in-out;
    flex-direction: column;
    
    div {
        display: block;
        color: #fff;
        font-size: 3rem;
        margin-bottom: 3rem;
        opacity: 0;
        transform: scale(0);
        transition: all 0.5s ease-in-out;
        ${p => p.isLoading && css`
            opacity: 1;
            transform: scale(1);
        `}
        transition-delay: 0.5s;
    }

    .letters {
        font-size: 2.5rem;
        color: #fff;

        .letter {
            display: inline-block;
            line-height: 1em;
            ${p => p.isLoading && css`
                animation: ${jump} 1s infinite alternate;
            `}
        }
    }
`;

