import React, { Component } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import axios from 'axios';

class FeaturedCarousel extends Component {
    
    getFeaturedContent () {}

    render() { 

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };

        return ( 
              <Carousel responsive={responsive}>
                  {/* <iframe width="480" height="270" src="https://www.youtube.com/embed/BWgSxte-cMs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <iframe width="480" height="270" src="https://www.youtube.com/embed/FqZV8rb5Wdk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <iframe width="480" height="270" src="https://www.youtube.com/embed/opih9l_iAhU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <iframe width="480" height="270" src="https://www.youtube.com/embed/AOqdWgCsp60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
              </Carousel>
         );
    }
}
 
export default FeaturedCarousel;