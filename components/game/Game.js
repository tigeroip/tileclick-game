import { Component } from 'react'
export default class Game extends Component {
    render () {
        return (
            <header>
                <div>
                    <h1>TileClick</h1>
                </div>
                <style jsx>{`
            header {
                background: grey;
                line-height: 1;
                text-align: center;
                font-size: 16px;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 80px;
            }
    `}</style>
            </header>
        )
    }
}
