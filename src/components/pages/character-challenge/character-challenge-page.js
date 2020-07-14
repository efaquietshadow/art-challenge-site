import React, {Component} from 'react'
import RandomCharacter from "./random-prompt"

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state={
            
        }
    }

    render() {
        return (
            <div className=''>
                <RandomCharacter />
            </div>
        )
    }
}