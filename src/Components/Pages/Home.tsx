import React from 'react';
import github from '../../resources/github.jpg';
import loading from '../../resources/gearbox.gif';
import { Link } from "react-router-dom";
import {Automata} from './Automata';

export const Home: React.FC = () => (
    <div className="page-container">
        <div className="page-body">
            <header className="">
                <img src={loading} alt="WIP" className="wip-gear"/>
                <p>
                    This webpage is a WIP.
                </p>
            </header>
            <p>
                Check out my github while you're here!
                <a href="https://github.com/alw98"><img src={github} alt="Github Logo" className="icoStyle"></img></a>
            </p>
            <Link to="/blog">Click here for my CS371p blog</Link><br/>
            <p>
                Check out my most recent personal project, a rock/paper/scissors game of life simulator. Red beats blue, blue beats green, and green beats red. When they
                meet, they can create beautiful spiral patterns!
            </p>
        </div>
        <Automata scroll={true}/>
    </div>
);
