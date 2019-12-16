import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='footer-wrapper'>
                <div className='footer'>
                    <div className='copyright'>
                        <h3>Copyright © 2019 MinnMax Media LLC - All Rights Reserved.</h3>
                    </div>
                    <div className='signature'>
                        <h3>Powered by Marquis Gaston Website Builder</h3>
                    </div>
                </div>
                <div className='follow-us'>                    
                    <h3>Follow Us Here</h3>

                    <div>Subscribe to <a href='https://podcasts.apple.com/us/podcast/the-minnmax-show/id1484599827' target='_blank'>The MinnMax Show</a> on iTunes</div>
                    <div>Check out our <a href="https://www.youtube.com/minnmaxgames" target='_blank'>YouTube channel</a></div>
                    <div>Follow us on <a href='https://twitter.com/minnmaxgames' target='_blank'>Twitter</a></div>
                    <div>Watch us on <a href='https://www.twitch.tv/minnmaxgames/' target='_blank'>Twitch</a></div>
                </div>
                <div className='patreon-info'>
                    <a href='https://www.patreon.com/minnmax'><h2>Support us on Patreon!!!</h2></a>
                </div>
            </div>
         );
    }
}
 
export default Footer;