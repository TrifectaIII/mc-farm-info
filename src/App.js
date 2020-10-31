import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Items from './components/Items';
import Farms from './components/Farms';


function App() {
  return (
    <div>
        <div>
            Created by <a href="https://trifectaiii.github.io/" tabindex="-1">
                Dakota Madden-Fong
            </a>
        </div>
        <h1>MC Farm Info</h1>
        <Items/>
        <Farms/>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
