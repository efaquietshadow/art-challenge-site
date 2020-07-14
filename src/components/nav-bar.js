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
                <NavLink exact to="/emoji-challenge" className="link">Emoji Challenge</NavLink>
                <NavLink exact to="/character-challenge" className="link">Character Challenge</NavLink>
                <NavLink exact to="/environment-challenge" className="link">Environment Challenge</NavLink>
                <NavLink exact to="/random-shape" className="link">Shape Challenge</NavLink>
                <NavLink exact to="/character-fusion" className="link">Character Fusion</NavLink>
                <NavLink exact to="/monthly-prompts" className="link">Monthly Prompts</NavLink>
            </div>
        )
    }
}