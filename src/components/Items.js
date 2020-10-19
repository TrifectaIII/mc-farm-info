import React from 'react';
import {connect} from 'react-redux';
import {items} from '../data';
import {selectItem} from '../redux/actions';

class Items extends React.Component {

    render = () => {
        const buttons = Object.keys(items).sort().map((name) => {
            return (
                <button 
                    key={name} 
                    // disable to currently selected button
                    disabled={name === this.props.chosenItem}
                    onClick={()=>this.props.selectItem(name)}
                >
                    {name}
                </button>
            );
        })
        return <div>{buttons}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        chosenItem: state.reducer.chosenItem,
    }
}

const mapDispatchToProps = {
   selectItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);