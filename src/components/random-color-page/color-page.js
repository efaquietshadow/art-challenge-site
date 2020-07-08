

import React, {Component} from 'react'

import RandomColor from "./random-color"

export default class ColorWrapper extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            numberOfBoxes: 1,
            color: ["#" + Math.floor(Math.random()*16777215).toString(16)]
        }

        this.randomizecolor = this.randomizecolor.bind(this)
        this.renderBoxes = this.renderBoxes.bind(this)
    }

    renderBoxes() {
        const colorContainer = []

        for (var i = 0; i < this.state.numberOfBoxes; i++) {
            colorContainer.push(
                <RandomColor color={this.state.color[i]}/>               
            )
        }

        return colorContainer
    }

    randomizecolor() {
        const newColors = []
        const numColors = document.querySelector("#boxNumber").value

        for (var i = 0; i < numColors; i++) {
            newColors.push("#" + Math.floor(Math.random()*16777215).toString(16))
        }
        this.setState({
            numberOfBoxes: numColors,
            color: newColors
        })
    }
    
    render() {
        return (
            <div className='page-wrapper'>
                <div className="input-and-button">
                    <input 
                    type="text" 
                    placeholder="number of random colors" 
                    id="boxNumber" 
                    defaultValue={this.state.numberOfBoxes}
                    >
                    </input>
                    <button onClick={this.randomizecolor}>Randomize</button>
                </div>
                <div className="color-boxes">
                    {this.renderBoxes()}
                </div>
            </div>
        )
    }
}
