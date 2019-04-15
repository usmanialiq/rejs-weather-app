/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/

import React, { Component } from 'react'

import imageURL from './sunny_progress_bar.gif';

class Loader extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: 200}} >
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <img src={imageURL} style={{ width: 200}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader;

/*
Author: Usman Ali'
Email: usmanialiq@gmail.com
*/