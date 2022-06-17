import React from "react";
import { CarDetails } from "./CarDetails";

export function App() {
    return (
        <div>
            <CarDetails initialData={{ model: 'Fiat Panda', year: '1980', color: 'Red' }} />
        </div> 
    )
}