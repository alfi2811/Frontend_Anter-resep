import React, { Component } from 'react';
import NavBar from './layout/NavBar';
import Carousel from './layout/Carousel';
import NavUtama from './layout/NavUtama/NavUtama';

class Home extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <div className="container" style={{width: '75vw'}}>
                    <Carousel />
                    <NavUtama />
                </div>
            </div>
        )
    }
}

export default Home;