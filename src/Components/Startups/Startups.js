import React from 'react';
import articlesStartups from "../../Data/Startups";
import styled from "@emotion/styled";
import { HashRouter } from "react-router-dom";
import {CardArticle} from "../CardArticle/CardArticle";

const StyledWraper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const StyledHeader = styled.h1`
text-align: center;
color: #373A47;
font-size: 1.5rem;
`;

export function Startups() {

    return (
        <>
            <StyledHeader>Startups</StyledHeader>
            <HashRouter>
                <StyledWraper>

                    {articlesStartups.map((item, i) =>    <CardArticle item ={item}/>)}
                </StyledWraper>
            </HashRouter>
        </>
    );
};