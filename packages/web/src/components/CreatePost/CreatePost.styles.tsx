import styled from "styled-components"

// Switch out with component-lib inputs

export const PostTitle = styled.input`
    border: 3px solid aliceblue;
    border-radius: 5px;
    padding: 1rem 0;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 1rem;
    text-indent: 0.25rem;
`

export const PostDescription = styled.textarea`
    border: 3px solid aliceblue;
    border-radius: 5px;
    padding: 1rem 0;
    font-size: 1rem;
    width: 100%;
    overflow: scroll;
    text-indent: 0.25rem;
    resize: none;
    margin-bottom: 1rem;
`