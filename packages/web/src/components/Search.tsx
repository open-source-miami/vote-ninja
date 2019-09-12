import * as React from "react"
import styled, { css } from "styled-components";


interface SearchProps {
    isSearching?: boolean
}

const SearchContainer = styled.div<SearchProps>`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    transform: translateY(-1000px);
    ${p => p.isSearching && css`
        transform: translateY(0);
    `};
`

const SearchInput = styled.input<SearchProps>`
    border: none;
    outline: none;
    width: 300px;
    margin: 0;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1rem;
    border-bottom: #8d2645;
    color: #fff;
`;

const SearchForm = styled.form<SearchProps>`
    display: flex;
    justify-content: center;
    opacity: 0;
    background-color: #c0325c;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 #c0325c,
    0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: opacity 0.5s ease-in;
    ${p => p.isSearching && css`
        opacity: 1;
    `}
`

const SearchSubmit = styled.button`
    border: none;
    outline: none;
    background-color: #4dafff;
    color: #fff;
    width: 50px;
    font-size: 1rem;
`

const Search: React.FC<SearchProps> = ({ isSearching }: SearchProps) => {
    return (
        <SearchContainer isSearching={isSearching}>
            <SearchForm isSearching={isSearching}>
                <SearchInput placeholder="Search for anything..." />
                <SearchSubmit>&rarr;</SearchSubmit>
            </SearchForm>
        </SearchContainer>
    )
}

export default Search;