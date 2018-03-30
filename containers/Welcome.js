import { Component } from 'react'
import io from 'socket.io-client'
import ComponentWelcome from '../components/Welcome'


export default class Welcome extends Component {

  start = () => {
    this.props.socket.emit('start', Date.now()) 
    this.props.start()
  }
  render () {
    return (
        <div className="container-welcome">
        <div className="header"><p className="header-text">TileClick</p></div>
        <div className="container-instructions">
          <p className="instruction">TileClick is a two player game.</p>
          <p className="instruction">The player to click the most red tiles wins.</p>
          <p className="instruction">To play, either create a new game and share the game name with your friend or join an existing game.</p>
        </div>
            <ComponentWelcome start={this.start}/>
            <style jsx>{`
                    .container-welcome {
                      display: block;
                      width: 100%;
                      margin: 0;
                      background: #ffffff;
                      text-align: center;
                      height: 100%;
                    }
                    .header {
                      height: 60px;
                      background-color: #3661B0;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                    .header-text {
                      color: #fff;
                      font-size: 21px;
                      font-weight: 600;
                    }
                    .container-instructions {
                      height: 50%;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      width: 100%;
                    }
                    .instruction {
                      margin: 10px 0;
                      line-height: 20px;
                      font-size: 16px;
                    }
                  `}</style>
        </div>
    )
  }
}
