import { Component } from 'react'
export default class Options extends Component {
    render () {
        return (
            <main>
                <div className="banner">
                    <h1>Game Options</h1>
                    <p>{this.props.formerror}</p>
                    <form onSubmit={this.props.handleSubmit}>
                        <input onChange={this.props.onChange} name="playername" placeholder="Your Name"/>
                        <input type="checkbox" name="gametype" placeholder="enter"  />
                        <input onChange={this.props.onChange} name="gamename" placeholder="Game Name"/>
                        <button type="submit">Go</button>
                    </form>
                </div>
            </main>
        )
    }
}
