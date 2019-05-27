import React from 'react';
import articles from "../../Data/Food";
// import styled from '@emotion/styled';
import {Item} from '../Item/Item';

export function Food() {
    const thisIsMyCopy = articles[2].data;
    return (
        <div>
            {articles.map(item => <Item item ={item}/> )}
        </div>


    );
};

//<div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>