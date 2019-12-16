import React, { Component } from 'react';

class FeaturedCarousel extends Component {
    
    fetchFeaturedContent(array){
        array.map(video => {
            console.log(video);
            return {
                video
            }
        })
    } 

    render() { 
        const featuredContent = <div><iframe className='featured-iframe' width="720" height="400" src="https://www.youtube.com/embed/IDPo8jj0vQA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>;
        const featuredContentDescription = `On this week's episode, we rip off the band-aid and break down our game of the year choices for each year throughout the last decade. This is a fun and sometimes painful stroll down memory lane, we also admit where we were completely wrong in retrospect. How does Mass Effect 2 shape up against Super Mario Galaxy 2 in retrospect? Red Dead Redemption 1 vs. 2? We hope you enjoy us reliving every frustrating argument over the last 9 years!

        Just a reminder, we have our first MinnMax community meetup on Monday, December 9th at 8pm at Bauhaus Brew Labs in Minneapolis. You don't have to be a Patreon supporter to swing by. If you're not in Minneapolis, we're raising money to buy toys for kids stuck in the hospital over the holidays right here -  https://www.gofundme.com/f/sweet-toys... `;
        
        function returnVideos () {
            
        }
        return ( 
        <div className='featured-carousel'>
            
            <div className='featured-item'>
                {featuredContent}
                <div className='featured-description'>
                    <div className='featured-description__titles'>
                        <h2>GREATEST GAMES OF THE DECADE</h2>
                        <h3>THE MINNMAX SHOW</h3>
                    </div>
                    <div className='featured-description__description'>
                        <h3>{featuredContentDescription.substring(0,380)}....</h3>
                    </div>
                </div>
            </div>
           
        </div>
         );
    }
}
 
export default FeaturedCarousel;