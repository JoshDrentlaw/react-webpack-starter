import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Josh Drentlaw Web Development</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))