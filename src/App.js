import React from "react"
import nameData from "./nameData"

export default function App() {
    const nameElements = nameData.map(name => {
        return <p>{name}</p>
    })
    return (
        <div>
            {nameElements}
        </div>
    )
}

