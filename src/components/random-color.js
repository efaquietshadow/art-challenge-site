import React, {Component} from 'react'

export default class RandomColor extends Component {
    constructor(props) {
        super(props)

        this.state={
            color: "#" + Math.floor(Math.random()*16777215).toString(16)
        }

        this.randomizecolor = this.randomizecolor.bind(this)
    }

    randomizecolor() {
        this.setState({
            color: "#" + Math.floor(Math.random()*16777215).toString(16)
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <button onClick={this.randomizecolor}>Randomize</button>
                <div className="color-box" style={{backgroundColor: this.state.color}}>{this.state.color}</div>
            </div>
        )
    }
}


// console.log(randomColor)