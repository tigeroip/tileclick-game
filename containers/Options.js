import { Component } from 'react'
import io from 'socket.io-client'
import Head from 'next/head'

export default class Options extends Component {
    constructor(props) {
        super(props)
         this.state = {
            playername: '',
            gamename: '',
            joingame: false,
            newgame: false,
            formerror: '',
        }
    }
    componentDidMount() {
        this.props.socket.on('formerror', (data) => {
            this.setState({formerror:data})
        })
        this.props.socket.on("gotogameboard", data => {
            if (data === 'true')
            this.ready()
        })
    }
    ready = () => {
        this.props.play();
    }
    onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
        [name]: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
         if ((this.state.gamename.length < 1) && (this.state.playername.length < 1))
                this.setState({formerror: 'Please enter your name and game name'})
        else if (this.state.gamename.length < 1)
                this.setState({formerror: 'Please enter game name'})
        else if (this.state.playername.length < 1)
                this.setState({formerror: 'Please enter your name'})
        else if (!this.state.joingame && !this.state.newgame)
                this.setState({formerror: 'Please select option to create or join a game'})
        else if (this.state.joingame && this.state.newgame) {
                this.setState({formerror: 'Please select to join or create a game and not both'})
        }
        else if ((this.state.gamename.length > 0) && (this.state.playername.length > 0) && (this.state.joingame && !this.state.newgame || !this.state.joingame && this.state.newgame)){
            this.props.socket.emit('checkgameinfo', {
                                            playername:this.state.playername,
                                            gamename:this.state.gamename,
                                            newgame: this.state.newgame,
                                            joingame: this.state.joingame
                                        })
    }
    }
        

  render () {
    return (
                <div className="container-options">
                    <Head>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/css/materialize.min.css"/>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/js/materialize.min.js"/>
                    </Head>
                    <div className="header"><p className="header-text">Options</p></div>
                    <p>{this.state.formerror}</p>
                    <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="playername" onChange={this.onChange} name="playername" placeholder="Your Name" type="text"/>
                        <label htmlFor="playername">Join Game</label>
                    </div>
                    <div className="input-field col s6">
          <input placeholder="Placeholder" id="firstname" type="text" className="validate"/>
          <label htmlFor="firstname">First Name</label>
        </div>
                    <div className="input-field">
                        <input onChange={this.onChange} name="gamename" placeholder="Game Name"/>
                    </div>
                        <input onChange={this.onChange} checked={this.state.joingame} type="checkbox" name="joingame" placeholder="enter" id="joingame"/>
                        <input onChange={this.onChange} checked={this.state.newgame} type="checkbox" name="newgame" placeholder="enter" id="newgame"/>
                        <label htmlFor="joingame">Join Game</label>
                        <label htmlFor="newgame">New Game</label>
                        <button type="submit">Go</button>
                    </form>
                    <style jsx>{`
                    .container-options {
                        margin: 0;
                        text-align: center;
                        background: #c0c3c6;
                        width: 100%;
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
