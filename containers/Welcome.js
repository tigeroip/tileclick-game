import { Component } from 'react'
import ComponentWelcome from '../components/Welcome'


export default class Welcome extends Component {
  

  start = () => {
    this.props.socketObj('start', Date.now())
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
