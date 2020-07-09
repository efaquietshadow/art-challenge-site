import React, {Component} from 'react'
import {NavLink} from "react-router-dom"

export default class navbar extends Component {
    constructor(props) {
        super(props)

        this.state={
            
        }
    }

    render() {
        return (
            <div className='navbar'>
                <NavLink exact to="/" className="link">Homepage</NavLink>
                <NavLink exact to="/color-challenge" className="link">Color Challenge</NavLink>
                Emoji Challenge
                <div className="random-character">Character Challenge</div>
                <div className="environment-challenge">Environment Challenge</div>
                <div className="random-shape">Shape Challenge</div>
                <div className="character-fusion">Character Fusion</div>
                Monthy Prompts
            </div>
        )
    }
}