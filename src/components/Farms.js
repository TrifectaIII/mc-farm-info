import React from 'react';
import {connect} from 'react-redux';
import {items, farms} from '../data';
import {deselectItem} from '../redux/actions';
import Images from '../item_images';
import './Farms.css';

//function component for individual farm data sheets
function Farm (props) {
    const farmInfo = farms[props.name];
    const producesImages = farmInfo.Produces.sort().map((itemName) => {
        return (<img src={Images[itemName]} title={itemName} alt={itemName} key={itemName} />);
    })
    const inputsImages = farmInfo.Inputs ? (farmInfo.Inputs.sort().map((itemName) => {
        return (<img src={Images[itemName]} title={itemName} alt={itemName} key={itemName} />);
    })) : null;
    return (
        <div className='farmInfo'>
            <h2>{props.name}</h2>
            <p>
                <b>Location: </b>
                <a 
                    href={farmInfo.DynmapLink.replace('%REACT_APP_SERVER_IP%', process.env.REACT_APP_SERVER_IP)}
                >
                    {farmInfo.Location}
                </a>
            </p>
            <p><b>Automatic: </b>{farmInfo.Automatic ? "✔️" : "❌"}</p>
            <p><b>Mob Switch: </b>{farmInfo.Switch ? "❌" : "✔️"} <span role='img' title={farmInfo.Switch ? 'Requires the Mob Switch to be turned off' : 'Will work with the Mob Switch on'}>❔</span></p>
            <p><b>Produces: </b>{producesImages}</p>
            {inputsImages ? (<p><b>Inputs: </b>{inputsImages}</p>): null}
            {farmInfo.Notes ? (<p><b>Notes: </b>{farmInfo.Notes}</p>) : null}
        </div>
    )
}

class Farms extends React.Component {

    render = () => {
        if (this.props.chosenItem in items) {
            const farmsDisplay = items[this.props.chosenItem].sort().map ((name) => {
                return (<Farm key = {name} name={name}/>);
            })

            return (<div className='Farms'>{farmsDisplay}</div>);
        }
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        chosenItem: state.reducer.chosenItem,
    }
}

const mapDispatchToProps = {
   deselectItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Farms);