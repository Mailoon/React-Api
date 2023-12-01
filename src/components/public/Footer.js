import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'

const Footer = () => {

    const [clicks, setClicks] = useState(0);
    const year = new Date().getFullYear();
    const companyName = "MAILOON.ING";
    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return (
        <div className='container-fluid bg-light text-center py-3'>
            <footer>
                <div className="d-flex">
                    <div className="col-md-4 ">
                        <p>&copy; {year} - {companyName} | Desear a jessica = {clicks}</p>
                    </div>
                    <div className="col-md-3">
                        <span onClick={handleClick}>
                            <img
                                height='52'
                                src="Jessica.jpeg"
                            />
                        </span>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
