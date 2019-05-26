import React from 'react';
import articles from "../../Data/Food";

export function Food() {
    const thisIsMyCopy = articles[2].data;
    return (
        <div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>

    );
};
