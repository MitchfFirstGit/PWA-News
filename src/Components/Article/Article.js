import React from 'react';
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

// const StyledWraper = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: space-around;
// `;


const StyledDiv = styled.div`

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
export function Article({item}) {

    return (

        <>
<Link to = {item.slugName}>
            <StyledDiv>
                <StyledImg src={item.img} />
                <p>{item.shortTitle}</p>
            </StyledDiv>
</Link>
        </>

    );
};
