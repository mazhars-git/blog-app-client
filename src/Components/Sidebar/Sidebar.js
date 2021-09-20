import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar pt-5">
            <div>
                <ul>
                    <li><a href=""></a>abc</li>
                    <li><a href=""></a>abc</li>
                    <li><a href=""></a>abc</li>
                    <li><a href=""></a>abc</li>
                </ul>
            </div>

            <div style={{paddingTop: '50%'}} >
                <a href="/home"><FontAwesomeIcon icon={faBackward} /> Home</a>
            </div>
        </aside>
    );
};

export default Sidebar;