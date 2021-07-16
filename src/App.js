import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Items from './components/Items';
import Farms from './components/Farms';


class App extends React.Component {

    handleMapChange = (event) => {
        this.setState({
            mapShown: event.target.checked,
        })
    }

    render = () => {
        return (
            <div>
                <div>
                    Created by <a href="https://trifectaiii.github.io/" tabIndex="-1">
                        Dakota Madden-Fong
                    </a>
                </div>
                <h1>MC Farm Info</h1>
                <a href={process.env.REACT_APP_SERVER_IP}>
                    <button class='dynmapLink'>DYNMAP</button>
                </a>
                <Items/>
                <Farms/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
