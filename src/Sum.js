import React from 'react';

export function Sum(props) {
    return (
        <div>
            <h1>{props.numbers.reduce((a, b) => a + b)}</h1>
        </div>
    )
}