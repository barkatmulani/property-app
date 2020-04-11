import React, { Component } from 'react';
import Results from './results/results';
import SavedProperties from './savedProperties/savedProperties';
import './main.css';

const Main = (props) => {
    return (
        <>
            <p className="h1 text-center p-3">Property Management Application</p>
            
            <div className="main row m-1">
                <div className="col-sm-6 col-xs-12 p-1">
                    <div className="border border-success rounded">
                        <Results />
                    </div>
                </div>
                <div className="col-sm-6 col-xs-12 p-1">
                    <div className="border border-success rounded">
                        <SavedProperties />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;