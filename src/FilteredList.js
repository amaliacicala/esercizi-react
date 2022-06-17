import { useMemo } from 'react'

export function FilteredList() {

    const hollywoo = [
        {
            name: "BoJack Horseman",
            id: 1,
            age: 57
        },
        {
            name: "Princess Carolyn",
            id: 2,
            age: 47
        },
        {
            name: "Diane Nguyen",
            id: 3, 
            age: 41
        },
        {
            name: "Vincent Adultman",
            id: 4,
            age: 12
        }
    ]

    const filteredList = useMemo(() => {
        return hollywoo.filter(person => person.age > 18)
    }, [])

    return (
        <div>
            <h2>Filtered List</h2>
            <ul>
                {filteredList.map(person => (
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    )
}