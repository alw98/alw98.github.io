import React from 'react';
import github from '../../resources/github.jpg';
import loading from '../../resources/gearbox.gif';

export const Home: React.FC = () => (
    <div className="App">
        <header className="">
            <img src={loading} alt="WIP" className="imgStyle"/>
            <p>
                This webpage is a WIP.
            </p>
            <p>
                Check out my github while you're here!
                <a href="https://github.com/alw98"><img src={github} alt="Github Logo" className="icoStyle"></img></a>
            </p>
            <a href="./blog/">Click here for my CS371p blog</a>
        </header>
    </div>
);
