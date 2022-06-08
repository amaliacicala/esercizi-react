import React from 'react';

export function Sum({numbers = [2, 6, 12, 42]}) {
    return (
        <div>
            <h1>{numbers.reduce((a, b) => a + b)}</h1>
        </div>
    )
}