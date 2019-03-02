import React from 'react';

import './Header.css';

const Header = (props)=>{

    return(
       <header className="header">
           <div className="header-content">
                <h1 className="text-center mt-5 font-weight-light">Phone Directory</h1>
            </div>
       </header>
    )
}
export default Header;