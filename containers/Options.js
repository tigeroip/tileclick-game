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
            this.props.socketObj('checkgameinfo', {
                                            playername:this.state.playername,
                                            gamename:this.state.gamename,
                                            newgame: this.state.newgame,
                                            joingame: this.state.joingame
                                        })
    }
    }
        

  render () {
    return (
            <main className="banner">
                <div>
                    <h1>Your Info</h1>
                    <p>{this.state.formerror}</p>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.onChange} name="playername" placeholder="Your Name"/>
                        <input onChange={this.onChange} checked={this.state.joingame} type="checkbox" name="joingame" placeholder="enter"  />
                        <input onChange={this.onChange} checked={this.state.newgame} type="checkbox" name="newgame" placeholder="enter"  />
                        <input onChange={this.onChange} name="gamename" placeholder="Game Name"/>
                        <button type="submit">Go</button>
                    </form>
                </div>
                <style jsx>{`
                    .banner {
                      display: block;
                      width: 600px;
                      margin: 0;
                      background: #03A9F4 !important;
                      position: absolute;
                      text-align: center;
                    }
                  `}</style>
            </main>
    )
  }
}
