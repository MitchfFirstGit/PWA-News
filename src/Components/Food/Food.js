import React, { useState } from 'react';
import articles from "../../Data/Food";
import styled from "@emotion/styled";
import { HashRouter, Route, Link } from "react-router-dom";
import {Article} from "../Article/Article";

const StyledWraper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const StyledHeader = styled.h1`

`;

export function Food() {

    return (
        <>
            <StyledHeader>{Food}</StyledHeader>
            <HashRouter>
        <StyledWraper>
            {articles.map((item, i) =>    <Article  item ={item}/>)}
        </StyledWraper>
            </HashRouter>
        </>
    );
};
