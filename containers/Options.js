import { Component } from 'react'
import io from 'socket.io-client'


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
                    <div className="header"><p className="header-text">Options</p></div>
                    <p className="form-error">{this.state.formerror}</p>
                    <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="playername" onChange={this.onChange} name="playername" type="text"/>
                        <label htmlFor="playername">Your Name</label>
                    </div>
                    <div className="input-field">
                        <input id="gamename" onChange={this.onChange} name="gamename" type="text"/>
                        <label htmlFor="gamename">Game Name</label>
                    </div>
                    <div className="form-checkbox">
                        <input onChange={this.onChange} checked={this.state.joingame} type="checkbox" name="joingame" id="joingame"/>
                        <label htmlFor="joingame">Join Game</label>
                    </div>
                    <div className="form-checkbox">
                        <input onChange={this.onChange} checked={this.state.newgame} type="checkbox" name="newgame" id="newgame"/>
                        <label htmlFor="newgame">New Game</label>
                    </div>
                        <button className="margin-top waves-effect waves-light btn-large" type="submit">Play</button>
                    </form>
                    <style jsx>{`
                    .container-options {
                        margin: 0;
                        text-align: center;
                        background: #ffffff;
                        width: 100%;
                        height: 400px;
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
                      .form-error {
                          color: #F44336;
                          margin: 15px 0 0 0;
                      }
                      form {
                        width: 90%;
                        margin: 15px auto 0;
                      }
                      .form-checkbox {
                        margin: 5px 0;
                      }
                      .margin-top {
                          margin-top: 10px;
                      }
                  `}</style>
                </div>
    )
  }
}
