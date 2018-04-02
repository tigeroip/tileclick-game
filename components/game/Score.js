import {Component} from 'react'

export default class Score extends Component {
    render () {
        return (
            <div>
                <div className="container-score">
                    <div className="container-score-titles">
                        <p className='score-title'>YOU</p>
                        <p className='score-title'>vs</p>
                        <p className='score-title'>{this.props.opponentname.toUpperCase()}</p>
                    </div>
                    <div className="container-score-values">
                        <p className='score-value'>{this.props.score}</p>
                        <p className='score-value'>{this.props.opponentscore}</p> 
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