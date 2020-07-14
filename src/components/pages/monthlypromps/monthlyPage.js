import React, {Component} from 'react'
import Moment from 'moment';

export default class MonthlyPrompts extends Component {
    constructor(props) {
        super(props)

        this.state={
            
        }
        this.handlePrompt = this.handlePrompt.bind(this)
    }

    handlePrompt() {
        fetch("http://127.0.0.1:5000/monthlyprompt/get/random", {
            method: "GET",
            headers: {"content-type": "application/json"}
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    }

// moment().calendar()


    render() {
        return (
            <div className=''>
                <button onClick={this.handlePrompt}>push me</button>
                <p>monthly prompt page</p>
                <div>On each day there is three prompts, you can choose to do one, two, or all three.</div>
                <p>print calender here</p>
            </div>
        )
    }
}