import React, { Component } from 'react';
import FeaturedContent from './featuredContent';
import FeaturedCarousel from './featuredCarousel';

class HomePage extends Component {
    
    render() { 
        return ( 
            <div className='homepage'>
                
                <FeaturedCarousel/>
            </div>
         );
    }
}

export default HomePage;