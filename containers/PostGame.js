import { Component } from 'react'
import io from 'socket.io-client'

export default class PostGame extends Component {
    constructor(props){
        super(props)
        this.state = {
            winner: 0,
            score: 0
        }
    }
    componentDidMount() {
        this.props.socket.emit('postgame', true)
        this.props.socket.on('postgame', (data) => {
            this.setState(function (state, props) {
                return {
                 ...data
                }
               });
        })
    }
    renderGameInfo() {
        if (this.state.winner === 1) {
            return <p className="winner">You Won!</p>
        }
        if (this.state.winner === 0) {
            return <p className="loser">You Lost</p>
        }
        if (this.state.winner === 2) {
            return <p className="tie">The game is a tie</p>
        }
    }
    playAgain() {
        window.location.reload()
    }

    render () {
        return (
            <div className="container">
                {this.renderGameInfo()}
                <p className="score">Your score: {this.state.score}</p>
                <button onClick={this.playAgain}>Play Again?</button>
            </div>
        )
    }
}