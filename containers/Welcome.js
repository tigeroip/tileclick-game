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
            <ComponentWelcome start={this.start}/>
            <style jsx>{`
                    .container-welcome {
                      display: block;
                      width: 100%;
                      margin: 0;
                      background: #c0c3c6;
                      text-align: center;
                      height: 100%;
                    }
                    .header {
                      height: 40px;
                      background-color: #2196f3;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                    .header-text {
                      color: #fff;
                      font-size: 21px;
                      font-weight: 600;
                    }
                  `}</style>
        </div>
    )
  }
}
