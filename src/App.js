import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Items from './components/Items';
import Farms from './components/Farms';


function App() {
  return (
    <div>
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
