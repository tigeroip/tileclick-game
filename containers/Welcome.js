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
        <div className="container">
            <ComponentWelcome start={this.start}/>
        </div>
    )
  }
}
