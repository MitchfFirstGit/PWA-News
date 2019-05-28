import React from 'react';
import articlesTech from "../../Data/Tech";
import styled from "@emotion/styled";
import { HashRouter} from "react-router-dom";
import {CardArticle} from "../CardArticle/CardArticle";

const StyledWraper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
const StyledHeader = styled.h1`

`;

export function Tech() {

    return (
        <>

            <HashRouter>
                <StyledWraper>

                    {articlesTech.map((item, i) =>    <CardArticle item ={item}/>)}
                </StyledWraper>
            </HashRouter>
        </>
    );
};