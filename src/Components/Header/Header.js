import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Slider from '../Slider/Slider';

const Header = () => {
    return (
        <div className="container">
            <MainMenu />
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-8">
                    <Slider />
                </div>
                <div className="col-md-2">

                </div>
            </div>
            
        </div>
    );
};

export default Header;