import { Component } from 'react'
import Router from 'next/router'
export default class ComponentWelcome extends Component {
    render () {
        return (
                <div className="container-welcome-content">
                    <h1>Welcome</h1>
                    <button onClick={this.props.start}>Start</button>
                    <style jsx>{`
                    .container-welcome-content {
                        display: flex;
                        width: 100%;
                        margin: 0;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        height: 100%;
                    }
                  `}</style>
                </div>
        )
    }
}
