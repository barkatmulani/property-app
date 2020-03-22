import React from 'react';
import { connect } from 'react-redux';
import Properties from '../shared/properties/properties';
import { addSavedProperty } from '../../redux/savedProperties/savedProperties.actions';

const Results = (props) => {
    const buttonClicked = x => {
        props.addSavedProperty(x);
    }

    return (
        <Properties heading="Results"
                    list={props.results.list}
                    buttonClicked={buttonClicked}
                    actionText="Add Property"
                    class="btn-success"
        />
    );
}

const mapStateToProps = state => ({
    results: state.results
});

const mapDispatchToProps = dispatch => ({
    addSavedProperty: property => dispatch(addSavedProperty(property))
})

export default connect(mapStateToProps, mapDispatchToProps)(Results);