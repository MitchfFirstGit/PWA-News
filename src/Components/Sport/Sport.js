import React from 'react';
import articles from '../../Data/Sport.js';

export function Sport() {
    const thisIsMyCopy = articles[5].data;
    return (
        <div  dangerouslySetInnerHTML={{__html: thisIsMyCopy}}></div>

    );
};
