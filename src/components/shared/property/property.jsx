import React from 'react';
import './property.css'

export default (props) => {
    let style = {
        backgroundColor: props.data.agency.brandingColors.primary,
        position: 'relative',
        display: 'inline-block'
    };

    let btnStyle = {
        fontSize: 10, position: 'absolute', top: 110, left: 55, zIndex: 1,
    };

    return (
        <div className="property" style={style}>
            <div className="header">
                <img src={props.data.agency.logo} alt={props.data.price} />
            </div>
            <div className="body">
                <img src={props.data.mainImage} alt={props.data.price} />
                <button style={ btnStyle } className={'btn ' + props.class} onClick={props.onClick}>{props.actionText || ''}</button>
                <div className="">{props.data.price}</div>
            </div>
        </div>
    );
}