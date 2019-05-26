import React from 'react';
import articles from "../../Data/Tech";

export function Tech() {
    const thisIsMyCopy = articles[5].data;
    return (
        <div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>

    );
};
