import React from 'react';
import Property from '../property/property';

export default (props) => {
    return (
        <div>
            <div className="h4">{props.heading}</div>
            { props.list && props.list.map((x, i) => {
                    return (
                        <div key={i} data-test="property">
                            <Property data={x} onClick={() => props.buttonClicked(x)} actionText={props.actionText} class={props.class}></Property>
                        </div>
                    );
                })
            }
        </div>
    );
}