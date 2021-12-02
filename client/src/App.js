import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Join from "./components/Join/Join.js"
import Chat from "./components/Chat/Chat.js"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Join} /> 
                <Route path="/chat" component={Chat} />
            </Switch>
        </Router>
        
    )
}

export default App
