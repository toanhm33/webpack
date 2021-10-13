import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import imgWebpack from './assets/images/man.jpeg'
import './style.css'
import './scss/style.scss'
import moment from "moment";

// Tạo component App
function App() {
    return (
        <div className="container">
            <img width="100px" height="100px" src={imgWebpack} alt="image"/>
            <h1>hello world!</h1>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

