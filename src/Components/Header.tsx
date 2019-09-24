import React from 'react';
import '../stylesheets/Header.css';

export const Header: React.FC = () => (
    <div className="header-container" id="container">
        <div className="header">
            <ul>
                <li>An item</li>
                <li>Another item</li>
                <li>The last item</li>
            </ul>
        </div>
    </div>
);
