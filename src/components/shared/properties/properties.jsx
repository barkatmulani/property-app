import React from 'react';
import Property from '../property/property';
import PropTypes from 'prop-types';

const Properties = (props) => {
    return (
        <div>
            <div className="h4 bg-success text-white border border-dark p-1">{props.heading}</div>
            { props.list && props.list.map((x, i) => {
                    return (
                        <div key={i} className="py-1" data-test="property">
                            <Property data={x} onClick={() => props.buttonClicked(x)} actionText={props.actionText} class={props.class}></Property>
                        </div>
                    );
                })
            }
        </div>
    );
}

Properties.propTypes = {
    heading: PropTypes.string,
    list: PropTypes.array,
    buttonClicked: PropTypes.func,
    actionText: PropTypes.string,
    class: PropTypes.string
}

export default Properties;