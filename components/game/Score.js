import {Component} from 'react'

export default class Score extends Component {
    render () {
        return (
            <div>
                <p className='scoreboard'>{this.props.score}</p>
            </div>
        )
    }
}