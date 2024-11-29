import './PhotoSection.css';

const PhotoSection = ({ title , imageUrl }) => {
    return (
        <section className="photo" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="overlay"></div>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="photo_text">
                            <h3>{title}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;

