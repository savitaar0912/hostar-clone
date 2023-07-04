import React from 'react'
import "../css/ImgSlider.css"

export default function ImgSlider() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-interval="1000">
                <div className="carousel-inner" data-interval="1000" >
                    <div className="carousel-item active">
                        <a href="/">
                            <img src="/images/slider-badag.jpg" className="d-block w-100" alt="..." />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="/">
                            <img src="/images/slider-badging.jpg" className="d-block w-100" alt="..." />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="/">
                            <img src="/images/slider-scale.jpg" className="d-block w-100" alt="..." />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="/">
                            <img src="/images/slider-scales.jpg" className="d-block w-100" alt="..." />
                        </a>
                    </div>
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </>
    )
}

