import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {setSearchString} from './redux/actions';
import Items from './components/Items';
import Farms from './components/Farms';


class App extends React.Component {

    handleSearch = (event) => {
        this.props.setSearchString(event.target.value);
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
                    <button className='dynmapLink'>DYNMAP</button>
                </a>
                <br/><br/>
                <input type='text' onChange={this.handleSearch} className='searchbar' />
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
    setSearchString,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
