import React from "react"
import Name from "./components/Name"
import nameData from "./nameData"

export default function App() {
    const names = nameData.map(item => {
         return (
         <Name key={item.id}
               item={item}
         />
         )
    })
    return (
        <div>
            {names}
        </div>
    )
}

