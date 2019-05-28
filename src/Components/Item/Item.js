import React, {  useState } from 'react';
import styled from '@emotion/styled';
import { HashRouter, Route, Link } from "react-router-dom";
// import {Article} from "../Article/Article";
import articles from '../../Data/Food'
const StyledDiv = styled(Link)`

     border: 0 solid transparent;
    border-radius: .25rem;
    width: 350px;
        -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.4);
    box-shadow: 0 1px 4px rgba(0,0,0,.4);
    margin-bottom: 5%;
`;
const StyledImg = styled.img`
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

`;
const StyledHeader = styled.h2`

`;


// export const Item = (props) => {
//
//     return(<P>Hello</P>)
// }

export function Item(props) {
    const id = props.match.params.id;
    const item = articles.find(item => item.slugName === id)
    console.log(articles);
    // console.log(item);
    return (

        <div  dangerouslySetInnerHTML={{__html: item.data}}></div>
    );
}


//<div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>

{/*<div>{item.shortTitle}</div>*/}