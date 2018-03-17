import { Component } from 'react'
import Router from 'next/router'
export default class ComponentWelcome extends Component {
    render () {
        return (
                <div className="container-welcome-content">
                    <a className="start" onClick={this.props.start}>Start</a>
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
                    .start {
                        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                        padding: 0 2rem;
                        text-transform: uppercase;
                        border: none;
                        border-radius: 2px;
                        font-size: 1rem;
                        outline: 0;
                        text-decoration: none;
                        color: #fff;
                        background-color: #26a69a;
                        text-align: center;
                        letter-spacing: .5px;
                        height: 54px;
                        line-height: 54px;
                        position: relative;
                        cursor: pointer;
                        display: inline-block;
                        overflow: hidden;
                        user-select: none;
                        -webkit-tap-highlight-color: transparent;
                        vertical-align: middle;
                        z-index: 1;
                        transition: .3s ease-out;
                    }
                    .start:hover {
                        outline: 0;
                        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
                        background-color: #2bbbad;
                    }
                    .start:active {
                        outline: 0;
                    }
                    .start:focus {
                        background-color: #1d7d74;
                    }
                  `}</style>
                </div>
        )
    }
}
