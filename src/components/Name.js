import React from "react"

export default function Name(props) {
        return (
            <div>
                <p>{props.item.name}</p>
                <p>{props.item.location}</p>
            </div>
        )
}
