import React from 'react';
import {connect} from 'react-redux';

class Items extends React.Component {

    constructor (props) {
        super(props);
    }

    render = () => {
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);