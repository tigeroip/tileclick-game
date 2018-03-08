import { Component } from 'react'
import Router from 'next/router'
export default class ComponentWelcome extends Component {
    render () {
        return (
            <main className="banner">
                <div>
                    <h1>Welcome</h1>
                    <button onClick={this.props.start}>Start</button>
                </div>
                <style jsx>{`
                    .banner {
                      display: block;
                      width: 100%;
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
