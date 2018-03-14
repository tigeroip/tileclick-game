import { Component } from 'react'
import io from 'socket.io-client'
import ComponentGame from '../components/game/Game'
import ComponentTile from '../components/game/Tile'
import ComponentScore from '../components/game/Score'


export default class Gameboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            starttime: null,
            activetile: null,
            score: 0,
            opponentscore: 0,
            delay: null,
            maxactivetiles: 20
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
            let hit = Date.now();
            let delay = hit - this.state.starttime; 
            this.props.socket.emit('score', {starttime : this.state.starttime, hit: hit})
            // reset the gameboard
            this.setState((prevState)=> {
                return {activetile: null, delay : delay, maxactivetiles: prevState.maxactivetiles - 1}
            })
        }
    }

    renderTiles() {
        if (this.state.maxactivetiles > 0) {
            const tiles = [1,2,3,4,5,6,7,8,9];
            return tiles.map((tile) => {
                if (this.state.activetile === tile)
                    return <ComponentTile key={tile} className="active" handleClick={this.handleClick} active={1}/>
                else
                    return <ComponentTile key={tile} active={0}/>
            })
        }
        else {
            this.props.postGame();
        }
    }

  render () {
    return (
        <div className="container">
            <ComponentGame starttime={this.state.starttime}/>
            <ComponentScore score={this.state.score} opponentscore={this.state.opponentscore} tilesleft={this.state.maxactivetiles} delay={this.state.delay}/>
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
                    margin: 35px auto 0;
                    flex-wrap: wrap;
                }
                .active {
                    background: red !important;
                }
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
