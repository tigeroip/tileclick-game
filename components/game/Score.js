import {Component} from 'react'

export default class Score extends Component {
    render () {
        return (
            <div>
                <div className="container-score">
                    <div className="container-score-titles">
                        <p className='score-title'>Score</p>
                        <p className='score-title'>Opponent</p>
                        <p className='score-title'>Tiles Left</p>
                        <p className='score-title'>Click Time</p>
                    </div>
                    <div className="container-score-values">
                        <p className='score-value'>{this.props.score}</p>
                        <p className='score-value'>{this.props.opponentscore}</p>
                        <p className='score-value'>{this.props.tilesleft}</p>
                        <p className='score-value'>{this.props.delay}</p>  
                    </div>
                </div>
                <style jsx>{`
                .container-score {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    flex-direction: column;
                    min-height: 50px;
                    justify-content: space-around;
                }
                .container-score-titles {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                }
                .container-score-values {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                }
                .score-title {
                    width: 25%;
                    text-align: center;
                }
                .score-value {
                    width: 25%;
                    text-align: center;
                }
            `}</style>
            </div>
        )
    }
}