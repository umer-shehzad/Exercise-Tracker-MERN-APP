import React from 'react'
import { CDBBox } from 'cdbreact';

const Footer = () => {
    return (
        <div>
            <CDBBox
                display="flex"
                flex="column"
                className="py-1"
                style={{
                    width: '100%', border: '1px solid', marginTop: '87px',
                    backgroundColor: "black", color: 'white'
                }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a
                            href="/" className="d-flex align-items-center p-0 text-dark"
                            style={{ textDecoration: 'none' }}
                        >
                            {/* <img alt="LOGO IMG" src="logo" width="30px" /> */}
                            <span
                                className="ml-3 h5 font-weight-bold"
                                style={{ color: 'skyblue', marginLeft: '10px' }}
                            >Exercise Tracker App - Info</span>
                        </a>
                        <p className="my-1" style={{ width: '100%', height: '30px', marginLeft: '30px' }}>
                            The Exercise Tracker Application is a web-based solution designed to help users track their exercise routines. It allows users to log their exercise.
                        </p>
                    </CDBBox>
                </CDBBox>
                <small
                    className="text-center mt-0"
                >&copy; Exercise Tracker APP, 2023. All rights reserved.</small>
            </CDBBox>
        </div>
    )
}
export default Footer;