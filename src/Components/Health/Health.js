import React from 'react';
import articlesHealth from "../../Data/Health";
import styled from "@emotion/styled";
import { HashRouter } from "react-router-dom";
import {CardArticle} from "../CardArticle/CardArticle";

const StyledWraper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const StyledHeader = styled.h1`

`;

export function Health() {

    return (
        <>

            <HashRouter>
                <StyledWraper>

                    {articlesHealth.map((item, i) =>    <CardArticle item ={item}/>)}
                </StyledWraper>
            </HashRouter>
        </>
    );
};








