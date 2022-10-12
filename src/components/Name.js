import React from "react"

export default function Name(props) {
    let speed
    if (props.item.speed > 1) {
        speed = "Super speedy"
    }
    return (
        <div>
            {speed && <p>{speed}</p>}
            <p>{props.item.name}</p>
            <p>{props.item.location}</p>
        </div>
    )
}

