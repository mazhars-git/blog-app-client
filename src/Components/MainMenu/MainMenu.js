import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../CSS/MainMenu.css';

const MainMenu = () => {
    return (
        <section>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{color: '#273c75', fontWeight: 'bold', fontSize: '30px'}} href="/home">TRAVELLER</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/addContent">Dashboard</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                    </ul>

                    <div class="search-box">
                        <span class="icon"><FontAwesomeIcon icon={faSearch} /></span>
                        <input type="search" id="search" placeholder="Search..." />
                    </div>
                    
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default MainMenu;