import React from 'react';
import { connect } from 'react-redux';
import Properties from '../shared/properties/properties';
import { removeSavedProperty } from '../../redux/savedProperties/savedProperties.actions';

const SavedProperties = (props) => {
    const buttonClicked = x => {
        props.removeSavedProperty(x);
    }

    return (
        <Properties heading="Saved Properties"
                    list={props.savedProperties.list}
                    buttonClicked={buttonClicked}
                    actionText="Remove Property"
                    class="btn-danger"
        />
    );
}

const mapStateToProps = state => ({
    savedProperties: state.savedProperties
});

const mapDispatchToProps = dispatch => ({
    removeSavedProperty: property => dispatch(removeSavedProperty(property))
})

export default connect(mapStateToProps, mapDispatchToProps)(SavedProperties);