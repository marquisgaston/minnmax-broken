import React, { Component } from 'react';
import FeaturedContent from './featuredContnet';
import FeaturedCarousel from './featuredCarousel';

class HomePage extends Component {
    
    render() { 
        return ( 
            <div className='homepage'>
                <FeaturedContent/>
                {/* <FeaturedCarousel/> */}
            </div>
         );
    }
}
 
export default HomePage;