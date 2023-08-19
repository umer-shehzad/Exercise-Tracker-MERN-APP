import React from 'react'
import {  CDBBox } from 'cdbreact';

const Footer = () => {
    return(
        <div>
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                        {/* <img alt="LOGO IMG" src="logo" width="30px" /> */}
                        <span className="ml-3 h5 font-weight-bold">Exrecise Tracker App</span>
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                        Description of our App
                        </p>
                    </CDBBox>
                    </CDBBox>
                    <small className="text-center mt-5">&copy; Exercise Tracker APP, 2023. All rights reserved.</small>
                </CDBBox>
            </div>          
    )
}
export default Footer;