import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Items from './components/Items';
import Farms from './components/Farms';
import rail_map from './Minecraft_Rail_Map.png';


class App extends React.Component {

    constructor (props) {
        super(props) 
        this.state = {
            mapShown: false,
        }
    }

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
                <label>
                    <input 
                        type="checkbox"
                        checked={this.state.mapShown}
                        onChange={this.handleMapChange}
                    /> 
                    Show Rail Map
                </label>
                <p hidden={!this.state.mapShown}>
                    <img src={rail_map} alt='A map of the rail system'/>
                    <p><i>Map by Connor</i></p>
                </p>
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
