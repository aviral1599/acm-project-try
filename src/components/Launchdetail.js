import React, { Component } from 'react';

function Launchdetail(props){ 
        return (
            <div className="col-12 col-md-5 m-1"  key={props.id}>
                <h1>{props.id}</h1>
            </div>
        );
    


}
export default Launchdetail;