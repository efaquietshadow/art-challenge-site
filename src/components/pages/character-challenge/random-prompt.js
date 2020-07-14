import React, {Component} from 'react'

export default class RandomCharacter extends Component {
    constructor(props) {
        super(props)

        this.state={
            currentPrompt: ""
        }

        this.handlePrompt = this.handlePrompt.bind(this)
    }

    handlePrompt() {
        fetch("http://127.0.0.1:5000/characterprompt/get/random", {
            method: "GET",
            headers: {"content-type": "application/json"}
    })
        .then(response => response.json())
        .then(data => this.setState({currentPrompt: data}))
        .catch(error => console.log(error))

    }

    render() {
        return (
            <div className=''>
                <div>Push the button for a random character prompt</div>
                <button onClick={this.handlePrompt}>push me</button>
                <h2>{this.state.currentPrompt}</h2>
            </div>
        )
    }
}