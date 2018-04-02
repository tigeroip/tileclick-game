import { Component } from 'react'
import io from 'socket.io-client'

export default class Postgame extends Component {
    constructor(props){
        super(props)
        this.state = {
            winner: 0,
            score: 0,
            waitingforotherplayer: true
        }
    }
    componentDidMount() {
        this.props.socket.emit('postgame', true)
        this.props.socket.on('postgame', (data) => {
            this.setState(function (state, props) {
                return {
                 ...data, waitingforotherplayer:false
                }
               });
        })
    }
    renderGameInfo() {
        let headerStyle = {
            height: '60px',
            width: '100%',
            backgroundColor: '#3661B0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          };
        let headerText = {
            color: '#fff',
            fontSize: '21px',
            fontWeight: '600'
        }
        if (this.state.winner === 1) {
            return <div style={headerStyle}><p style={headerText}>You Won!</p></div>
        }
        if (this.state.winner === 0) {
            return <div style={headerStyle}><p style={headerText}>You Lost</p></div>
        }
        if (this.state.winner === 2) {
            return <div style={headerStyle}><p style={headerText}>The game is a tie</p></div>
        }
    }
    playAgain() {
        window.location.reload()
    }

    render () {
        return (
            <div className="container">
                {this.renderGameInfo()}
            <div className="main">
                <div className="container-score">
                    <p className="score">Your score: {this.state.score}</p>
                </div>
                <div className="container-button">
                    <button className="waves-effect waves-light btn-large" onClick={this.playAgain}>Play Again?</button>
                </div>
            </div>
                <style jsx>{`
                    .container {
                        background-color: #ffffff;
                        width: 100%;
                        margin: 0;
                        height: 100%;
                    }
                    .main {
                        height: 340px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    .container-score, .container-button {
                        margin: 40px 0;
                    }
                    .score {
                        font-size: 28px;
                    }
                `}</style>
            </div>
        )
    }
}