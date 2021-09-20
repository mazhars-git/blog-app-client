import React from 'react';
import slider_1 from '../../images/slider-1.jpg';
import slider_2 from '../../images/slider-2.jpg';
import slider_3 from '../../images/slider-3.jpg';
import slider_4 from '../../images/slider-4.jpg';

const Slider = () => {
    return (
        <div className="slider">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={slider_4} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Tangowar Haur</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src={slider_2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Mawa Road</h2>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src={slider_3} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Sylhet</h2>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    );
};

export default Slider;