import React from 'react';
import './property.css'

export default (props) => {
    let style = {
        backgroundColor: props.data.agency ? props.data.agency.brandingColors.primary : '',
    };

    return (
        <div className="property" style={style}>
            <div className="header">
                <img src={props.data.agency ? props.data.agency.logo : ''} alt={props.data.price} />
            </div>
            <div className="body">
                <img src={props.data.mainImage} alt={props.data.price} />
                <button className={'btn ' + props.class}
                        onClick={props.onClick}
                        data-test="button"
                        >
                            {props.actionText || ''}
                </button>
                <div className="">{props.data.price}</div>
            </div>
        </div>
    );
}