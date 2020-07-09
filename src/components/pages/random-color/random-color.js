import React, {Component} from 'react'

export default class RandomColor extends Component {
    constructor(props) {
        super(props)

        this.state={
            color: props.color
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="color-box" style={{backgroundColor: this.props.color}}>{this.props.color}</div>
            </div>
        )
    }
}