import React from 'react';
import articles from "../../Data/Health";

export function Health() {
    const thisIsMyCopy = articles[5].data;
    return (
        <div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>

    );
};
