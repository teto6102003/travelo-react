import React, { useEffect, useState } from 'react';
import './OurStory.css';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
const OurStory = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    useEffect(() => {
        const interval1 = setInterval(() => {
            setNum1(prev => (prev < 378 ? prev + 1 : prev));
        }, 58);

        const interval2 = setInterval(() => {
            setNum2(prev => (prev < 30 ? prev + 1 : prev));
        }, 800);

        const interval3 = setInterval(() => {
            setNum3(prev => (prev < 2263 ? prev + 1 : prev));
        }, 8);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <section className="about_story">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="story_heading">
                            <h1 className="text-start">Our Story</h1>
                        </div>
                        <div class="story_info p-4">
                        <p class="text-start m-5">Consulting represents success at realizing the company is going in the
                            wrong direction. The only time the company fails is when it is not possible to do a
                            turnaround anymore. We help companies pivot into more profitable directions where they can
                            expand and grow. It is inevitable that companies will end up making a few mistakes; we help
                            them correct these mistakes.Consulting represents success at realizing the company is going
                            in the wrong direction. The only time the company fails is when it is not possible to do a
                            turnaround anymore. We help companies pivot into more profitable directions where they can
                            expand and grow. It is inevitable that companies will end up making a few mistakes; we help
                            them correct these mistakes.</p>
                        <p class="text-start m-5">Consulting represents success at realizing the company is going in the
                            wrong direction. The only time the company fails is when it is not possible to do a
                            turnaround anymore. We help companies pivot into more profitable directions where they can
                            expand and grow. It is inevitable that companies will end up making a few mistakes; we help
                            them correct these mistakes.Consulting represents success at realizing the company is going
                            in the wrong direction. The only time the company fails is when it is not possible to do a
                            turnaround anymore. We help companies pivot into more profitable directions where they can
                            expand and grow. It is inevitable that companies will end up making a few mistakes; we help
                            them correct these mistakes.</p>
                    </div>
                    <div class="story_album mt-5">
                        <div class="row m-5">
                            <div class="col-md-6 mb-3">
                            <img src={Img1} alt="First story album" /> 
                            </div>
                            <div class="col-md-6 mb-3 ">
                            <img src={Img2} alt="Second story album" /> 
                            </div>
                        </div>
                    </div>

                        {/* Stats Section */}
                        <div className="counter">
                            <div className="row m-5">
                                <div className="col-md-4">
                                    <div className="stat">
                                        <h3>{num1}</h3>
                                        <p>Tour has done successfully</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="stat">
                                        <h3>{num2}</h3>
                                        <p>Yearly tour arrange</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="stat">
                                        <h3>{num3}</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other content can go here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
