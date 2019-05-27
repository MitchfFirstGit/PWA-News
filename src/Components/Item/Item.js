import React, {  useState } from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  color: red;
`;
// export const Item = (props) => {
//
//     return(<P>Hello</P>)
// }

export function Item(props) {

    return (
        <div>
            <p>{props.item.shortTitle}</p>

        </div>
    );
}


//<div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>