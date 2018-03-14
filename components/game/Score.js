import {Component} from 'react'

export default class Score extends Component {
    render () {
        return (
            <div>
                <div className="container-score">
                    <p className='score'>Your score: {this.props.score}</p>
                    <p className='score'>Opponent's score: {this.props.opponentscore}</p>
                    <p className='score'>Tiles remaining: {this.props.tilesleft}</p>
                    <p className='score'>Your delay: {this.props.delay}</p>
                </div>
                <style jsx>{`
                .container-score {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                }
            `}</style>
            </div>
        )
    }
}