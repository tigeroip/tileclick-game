import { Component } from 'react'
import Welcome from '../containers/Welcome'
import Options from '../containers/Options'
import Gameboard from '../containers/Gameboard'
import Postgame from '../containers/Postgame'
import io from 'socket.io-client'
import {browserHistory, Router, Route} from 'react-router'
import {createMemoryHistory} from 'history'
import Head from 'next/head'


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
                          
        <div className="container-main">
          <Head>
          <title>Tile Click Game</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="/static/css/materialize.min.css"/>
            <script src="/static/js/jquery-3.3.1.min.js"/>
            <script src="/static/js/materialize.min.js"/>
          </Head>
          <div className="banner"/>
          <Route exact path="/" render={start}/>
          <Route path="/options" component={options}/>
          <Route path="/gameboard" component={gameboard}/>
          <Route path="/postgame" component={postgame}/>
          <style global jsx>{`
          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed, 
          figure, figcaption, footer, header, hgroup, 
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          article, aside, details, figcaption, figure, 
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          body {
            line-height: 1;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after,
          q:before, q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          html, body {
            height: 100%;
            width: 100%;
          }
            body {
              background: #aaaaaa;
            }
            #__next {
              margin: 0;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .container-main {
              height: 400px;
              width: 90%;
              max-width: 400px;
            }
            .banner {
              height: 20px;
              background-color: #1976d2;
            }
          `}</style>
        </div>
      </Router>
    )
  }
}
