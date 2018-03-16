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
            <ComponentWelcome start={this.start}/>
            <style jsx>{`
                    .container-welcome {
                      display: block;
                      width: 100%;
                      margin: 0;
                      background: #03A9F4;
                      text-align: center;
                      height: 100%;
                      border-radius: 10px;
                    }
                  `}</style>
        </div>
    )
  }
}
