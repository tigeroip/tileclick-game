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
            maxactivetiles: 10,
            isloading: true
        }
    }

    // componentWillMount() {
    //     this.props.socket.emit('ready', true)
    // }

    componentDidMount() {
        this.props.socket.emit('ready', true)

        this.props.socket.on('activateboard', (data) => {
            this.setState(function (state, props) {
                return {
                 ...data, isloading:false
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
        this.props.socket.on('gamefinished', (data) => {
            if (data.gotopostgame === true) this.postGame();
        })
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.maxactivetiles === 0) {
            this.props.socket.emit('gamefinished', true)
        }     
    }

    postGame = () => {
        this.props.postGame()
    }

    handleClick = (isActive) => {
        if (isActive == 1) {
            let hit = Date.now();
            let delay = hit - this.state.starttime; 
            this.props.socket.emit('score', {starttime : this.state.starttime, hit: hit})
            // reset the gameboard
            this.setState((prevState)=> {
                if (prevState.maxactivetiles != 0) {
                 return {activetile: null, delay : delay, maxactivetiles: prevState.maxactivetiles - 1}
                }
            })
        }
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

    showLoadingScreen() {
        return (<div> <p className="loading">Waiting for other player to connect.</p>
                <style jsx>{`
                    .loading {
                        color: red;
                        text-align: center;
                    }
                `}</style>
                </div>)
    }


  render () {
    return (
        <div className="container">
            <ComponentGame starttime={this.state.starttime}/>
            {this.state.isloading ? this.showLoadingScreen() : <ComponentScore score={this.state.score} opponentscore={this.state.opponentscore} tilesleft={this.state.maxactivetiles} delay={this.state.delay}/>}
            <div className="container-tiles">
                {this.renderTiles()}
            </div>

            <style jsx>{`
                .container {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    background-color: #ffffff;
                }
                .container-tiles {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    margin: 35px auto 0;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 10px;
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
