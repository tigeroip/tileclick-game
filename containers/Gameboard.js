import { Component } from 'react'
import io from 'socket.io-client'
import ComponentGame from '../components/game/Game'
import ComponentTile from '../components/game/Tile'


export default class Gameboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            starttime: null,
            activetile: null
        }
    }

    componentDidMount() {
        this.props.socket.emit('ready', true)
        this.props.socket.on('activateboard', (data) => {
            // this.setState({...data})
            this.setState(function (state, props) {
                return {
                 ...data
                }
               });
               console.log(data)
        })
    }

    handleClick = (isActive) => {
        if (isActive == 1) {
            this.props.socket.emit('score', {starttime : this.state.starttime, hit: Date.now()})
            // reset the gameboard
            this.setState({activetile: null})
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

  render () {
    return (
        <div className="container">
            <ComponentGame starttime={this.state.starttime}/>
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
