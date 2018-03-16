import { Component } from 'react'
import Welcome from '../containers/Welcome'
import Options from '../containers/Options'
import Gameboard from '../containers/Gameboard'
import Postgame from '../containers/Postgame'
import io from 'socket.io-client'
import {browserHistory, Router, Route} from 'react-router'
import {createMemoryHistory} from 'history'


var location = {};
const history = createMemoryHistory(location)

const serverpath = 'localhost:4000'
const socket = io(serverpath)




export default class Index extends Component {

    componentWillMount () {
      this.socket = socket;
    }


  render () {
            
        
    const start = () => ( <Welcome socket={this.socket} start={() => history.push('/options')}/> )
    const options = () => ( <Options socket={this.socket} play={() => history.push('/gameboard')} /> )
    const gameboard = () => ( <Gameboard socket={this.socket} postGame={() => history.push('/postgame')}/>)
    const postgame = () => ( <Postgame socket={this.socket}/>)

    return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={start}/>
          <Route path="/options" component={options}/>
          <Route path="/gameboard" component={gameboard}/>
          <Route path="/postgame" component={postgame}/>
          <style global jsx>{`
            html {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            body {
              background: orange;
              display: flex;
              width: 600px;
              height: 500px;
              border: 2px solid black;
              margin: 0;
              position: absolute;
              left: 20px;
              top: 20px;
            }
            body div {
              margin: 0;
            }
          `}</style>
        </div>
      </Router>
    )
  }
}
