import {Component} from 'react'

export default class QuitGame extends Component {
    render () {
        return (
            <div>
                <button className="quitgame" onClick={this.props.quitgame}>Quit</button>
            </div>
        )
    }
}