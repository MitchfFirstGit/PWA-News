import React from 'react';
import articles from "../../Data/Startups";

export function Startups() {
    const thisIsMyCopy = articles[5].data;
    return (
        <div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>

    );
};
