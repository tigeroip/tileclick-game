import {Component} from 'react'

export default class Score extends Component {
    render () {
        return (
            <div>
                <p className='score'>Your score: {this.props.score}</p>
                <p className='score'>Opponent's score: {this.props.opponentscore}</p>
            </div>
        )
    }
}