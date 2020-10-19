import React from 'react';
import {connect} from 'react-redux';
import {items, farms} from '../data';
import {deselectItem} from '../redux/actions';

class Farm extends React.Component {

    render = () => {
        if (this.props.chosenItem in items) {
            const farmsDisplay = items[this.props.chosenItem].map ((name) => {
                const farmInfo = farms[name];
                return (
                    <div key={name}>
                        <h2>{name}</h2>
                        <p><b>Location: </b><a href={farmInfo.DynmapLink}>{farmInfo.Location}</a></p>
                        <p><b>Automatic: </b>{farmInfo.Automatic ? "✔️" : "❌"}</p>
                        <p><b>Produces: </b>{farmInfo.Produces.join(", ")}</p>
                    </div>
                )
            })

            return (<>{farmsDisplay}</>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Farm);