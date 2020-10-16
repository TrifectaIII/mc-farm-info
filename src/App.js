import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App() {
  return (
    <div>
        <h1>React-Redux Template</h1>
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
