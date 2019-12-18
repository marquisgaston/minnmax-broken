import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap'

// import axios from 'axios';

class FeaturedCarousel extends Component {
    
    getFeaturedContent () {}

    render() { 
        const slides = ['oAtxxDFbIbM','fmdEj9aGDZY', 'sqwzj5YtQdE']
        const youtubeIDs =[]
        
        function renderContent () {
            const className = 'carouselItem';
            const featuredContentDescription = `On this week's episode, we rip off the band-aid and break down our game of the year choices for each year throughout the last decade. This is a fun and sometimes painful stroll down memory lane, we also admit where we were completely wrong in retrospect. How does Mass Effect 2 shape up against Super Mario Galaxy 2 in retrospect? Red Dead Redemption 1 vs. 2? We hope you enjoy us reliving every frustrating argument over the last 9 years!
                Just a reminder, we have our first MinnMax community meetup on Monday, December 9th at 8pm at Bauhaus Brew Labs in Minneapolis. You don't have to be a Patreon supporter to swing by. If you're not in Minneapolis, we're raising money to buy toys for kids stuck in the hospital over the holidays right here -  https://www.gofundme.com/f/sweet-toys... `;
            return (
                
                slides.map(slide => {
                    console.log(slide);                    
                    return (
                        <Carousel.Item key={slide}>
                            <div className={`${className}`} >
                                <iframe width="720" height="400" src={`https://www.youtube.com/embed/${slide}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className='featured-description'>
                                    <div className='featured-description__titles'>
                                        <h2>Podcast Episode Title Goes Here</h2>
                                        <h3>THE MINNMAX SHOW</h3>
                                    </div>
                                    <div className='featured-description__text'>
                                        {featuredContentDescription.substring(0,380)}....
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })
            )
        }

        return ( 
          <div>
            <Carousel>
                {renderContent()}
            </Carousel>
          </div>
         );
    }
}
 
export default FeaturedCarousel;