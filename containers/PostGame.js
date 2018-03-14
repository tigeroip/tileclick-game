import { Component } from 'react'
import io from 'socket.io-client'

export default class PostGame extends Component {
    constructor(props){
        super(props)
        this.state = {
            winner: null,
            score: null
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
        if (this.state.winner === true) {
            return (<p className="winner">You Won!</p>, <p className="score">Your score: {this.state.score}</p>)
        }
        if (this.state.winner === false) {
            return (<p className="loser">You Lost</p>, <p className="score">Your score: {this.state.score}</p>)
        }
    }

    render () {
        return (
            <div className="container">
                {this.renderGameInfo()}
            </div>
        )
    }
}