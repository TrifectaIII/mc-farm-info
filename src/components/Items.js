import React from 'react';
import {connect} from 'react-redux';
import {items} from '../data';
import {selectItem} from '../redux/actions';
import Images from '../item_images';
import './Items.css'

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
                    <img src={Images[name]} title={name} alt={name}/>
                </button>
            );
        })
        return <div class='Items'>{buttons}</div>;
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