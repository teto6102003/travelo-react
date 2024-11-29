import React from 'react';
import './TravelSection.css';
import trainImage from '../../assets/train.png';
import hotelImage from '../../assets/hotel.png';
import worldwideImage from '../../assets/worldwide (1).png';

const TravelSection = () => {
    return (
        <section className="travel_area my-5">
            <div className="container">
                <div className="row my-5">
                    <div className="feature col-lg-4 col-md-6 my-5 text-center p-4">
                        <div className="img my-5">
                            <img src={trainImage} alt="Comfortable Journey" />
                        </div>
                        <h4>Comfortable Journey</h4>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                    <div className="feature col-lg-4 col-md-6 my-5 text-center p-4">
                        <div className="img my-5">
                            <img src={hotelImage} alt="Luxurious Hotel" />
                        </div>
                        <h4>Luxurious Hotel</h4>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                    <div className="feature col-lg-4 col-md-6 my-5 text-center p-4">
                        <div className="img my-5">
                            <img src={worldwideImage} alt="Travel Guide" />
                        </div>
                        <h4>Travel Guide</h4>
                        <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelSection;
