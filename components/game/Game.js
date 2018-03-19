import { Component } from 'react'
export default class Game extends Component {
    render () {
        return (
            <header>
                <div>
                    <h1 className="title-text">TileClick</h1>
                </div>
                <style jsx>{`
            header {
                background: #3661B0;
                line-height: 1;
                text-align: center;
                font-size: 16px;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .title-text {
                color: #fff;
                font-size: 21px;
                font-weight: 600;
            }
    `}</style>
            </header>
        )
    }
}
