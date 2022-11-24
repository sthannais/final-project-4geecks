import React from 'react';

const Showcase = () => {

    const showcasehome = {
        title1: 'One Road Fixed',
        subtitle1: 'We collect every pothole in the area.',
        imageURL1: './assets/img/Road1.png',
        title2: 'Two Roads Fixed',
        subtitle2: 'Sign up and upload your report',
        imageURL2: './assets/img/Road2.png',
        title3: 'Every Road Fixed!',
        subtitle3: 'Follow your own reports.',
        imageURL3: './assets/img/Road3.png',
    }

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={showcasehome.imageURL1} className="d-block w-100" alt="Slide 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{showcasehome.title1}</h5>
                        <p>{showcasehome.subtitle1}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={showcasehome.imageURL2} className="d-block w-100" alt="Slide 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{showcasehome.title2}</h5>
                        <p>{showcasehome.subtitle2}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={showcasehome.imageURL3} className="d-block w-100" alt="Slide 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{showcasehome.title3}</h5>
                        <p>{showcasehome.subtitle3}</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Showcase;