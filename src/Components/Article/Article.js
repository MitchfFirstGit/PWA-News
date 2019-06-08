import React from 'react';
// import styled from '@emotion/styled';
import './styles.css';

// const StyledImg = styled.img`
//     width: 100%;
// `;
// const StyledHeader = styled.h2`

// `;



export function Article(props) {
    console.log(props.articles);
    const id = props.match.params.id;

    const item = props.articles.find(item => item.slugName === id);

    return (

        <div dangerouslySetInnerHTML={{ __html: item.data }}></div>
    );
}


