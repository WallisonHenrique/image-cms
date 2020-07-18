import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Conector from "./gallery/Conector";
import { Provider } from 'react-redux';
import { ImageCMSDataStore } from './data/DataStore';
import './App.css';

class App extends React.Component {
    
    render() {
        
        return (
            <Provider store={ ImageCMSDataStore }>
                <Router>
                    <Switch>
                    	<Route path="/" component={Conector} />
                    	<Redirect to="/" />
                    </Switch>      
                </Router>
            </Provider>
        );
    }
}

export default App;