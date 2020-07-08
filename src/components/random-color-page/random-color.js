import React from 'react'

export default function RandomColor(props) {
    return (
        <div className='wrapper'>
            <div className="color-box" style={{backgroundColor: props.color}}>{props.color}</div>
        </div>
    )
}