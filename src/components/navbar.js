import React, { Component } from 'react';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='navbar-wrapper'>
                <div className='navbar'>
                    <div className='navbar__flex'>
                        <div className='navbar__flex__logo'>
                            <img src='//img1.wsimg.com/isteam/ip/5e2ad34f-fcdf-4ca3-9e15-9ff5a36b301b/logo/deeb1c8f-c658-4f8d-8b23-a25027f1ada9.png'/>
                        </div>
                        <div className='navbar__flex__buttons'>
                            <a onClick={() => history.push('/')}>
                                Home
                            </a>
                            <a onClick={() => history.push('/patreoninfo')}>
                                Patreon
                            </a>
                            <a href='http://www.youtube.com/minnmaxgames'>
                                youTube
                            </a>
                            <a>
                                Community
                            </a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Navbar;