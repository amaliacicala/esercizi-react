import { useRef } from 'react'

export function CarDetails({ initialData }) {
    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();

    function handleInputChange(event) {
        event.target.value = ''
    } // ho interpretato così l'ultima parte della traccia (reset the form every time the `initialData` value changes), ma non sono sicura di cosa stia chiedendo 🤔 In alternativa si potrebbe cambiare onChange in onFocus

    return (
        <fieldset style={{width:'15rem'}}>
            <legend>
                <h3>Car Details</h3>
            </legend>

            <form id="form">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <label htmlFor="model">Model:</label>
                    <input
                        name="model"
                        type="text"
                        defaultValue={initialData.model}
                        ref={modelRef}
                        onChange={handleInputChange}
                    />
                </div>

                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <label htmlFor="year">Year:</label>
                    <input
                        name="year"
                        type="number"
                        defaultValue={initialData.year}
                        ref={yearRef}
                        onChange={handleInputChange}
                    />
                </div>

                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <label htmlFor="color">Color:</label>
                    <input
                        name="color"
                        type="text"
                        defaultValue={initialData.color}
                        ref={colorRef}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <button type="submit" disabled>Submit</button>
                </div>
            </form>
        </fieldset>
    )
}