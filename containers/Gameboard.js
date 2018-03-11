import { Component } from 'react'
import io from 'socket.io-client'
import ComponentGame from '../components/game/Game'
import ComponentTile from '../components/game/Tile'
import ComponentScore from '../components/game/Score'
import ComponentQuitGame from '../components/game/QuitGame'


export default class Gameboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            starttime: null,
            activetile: null,
            score: 0,
            opponentscore: 0
        }
    }

    componentDidMount() {
        this.props.socket.emit('ready', true)
        this.props.socket.on('activateboard', (data) => {
            this.setState(function (state, props) {
                return {
                 ...data
                }
               });
        })
        this.props.socket.on('score', (data) => {
            this.setState(function (state, props) {
                return {
                 ...data
                }
               });
        })
    }

    handleClick = (isActive) => {
        if (isActive == 1) {
            this.props.socket.emit('score', {starttime : this.state.starttime, hit: Date.now()})
            // reset the gameboard
            this.setState({activetile: null})
        }
    }

    quitGame() {
        alert('Are you sure you want to quit?')
    }

    renderTiles() {
        const tiles = [1,2,3,4,5,6,7,8,9];
        return tiles.map((tile) => {
            if (this.state.activetile === tile)
                return <ComponentTile key={tile} className="active" handleClick={this.handleClick} active={1}/>
            else
                return <ComponentTile key={tile} active={0}/>
        })
    }

  render () {
    return (
        <div className="container">
            <ComponentGame starttime={this.state.starttime}/>
            <ComponentScore score={this.state.score} opponentscore={this.state.opponentscore}/>
            <ComponentQuitGame quitgame={this.quitGame}/>
            <div className="container-tiles">
                {this.renderTiles()}
            </div>

            <style jsx>{`
                .container {
                    position: absolute;
                    height: 500px;
                    width: 600px;
                    display: flex;
                    flex-direction: column;
                }
                .container-tiles {
                    display: flex;
                    width: 500px;
                    align-items: center;
                    margin: 62px auto 0;
                    flex-wrap: wrap;
                }
                .active {
                    background: red !important;
                }
            `}</style>
        </div>
    )
  }
}
