import React from 'react';
import {connect} from 'react-redux';
import {items, farms} from '../data';
import {deselectItem} from '../redux/actions';
import Images from '../images';
import './Farms.css';

class Farms extends React.Component {

    render = () => {
        if (this.props.chosenItem in items) {
            const farmsDisplay = items[this.props.chosenItem].sort().map ((name) => {
                const farmInfo = farms[name];
                const producesImages = farmInfo.Produces.map((itemName) => {
                    return (<img src={Images[itemName]} title={itemName} alt={itemName}/>);
                })
                return (
                    <div key={name}>
                        <h2>{name}</h2>
                        <p><b>Location: </b><a href={farmInfo.DynmapLink}>{farmInfo.Location}</a></p>
                        <p><b>Automatic: </b>{farmInfo.Automatic ? "✔️" : "❌"}</p>
                        <p><b>Produces: </b>{producesImages}</p>
                        {farmInfo.Notes ? (<p><b>Notes: </b>{farmInfo.Notes}</p>) : null}
                    </div>
                )
            })

            return (<div class='Farms'>{farmsDisplay}</div>);
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