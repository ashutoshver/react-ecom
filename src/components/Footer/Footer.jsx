import "./Footer.css";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../assets/payments.png';


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">About</div>
                        <div className="text">I make this project for a learning purpous only and
                            I want to learn some more functionality in react that's why
                            I have to add some more functionality in this project.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Contact</div>
                        <div className="c-items">
                            <FaLocationArrow />
                            <div className="text">B-80 Sector-H, Jankipuram, Lucknow, Uttar Pradesh, 226021</div>
                        </div>

                        <div className="c-items">
                            <FaMobileAlt />
                            <div className="text">Phone: 09450513818</div>
                        </div>

                        <div className="c-items">
                            <FaEnvelope />
                            <div className="text">Email: ashutoshrock24@gmail.com</div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="title">Categories</div>
                        <span className="text">Headphones</span>
                        <span className="text">Smart Watches</span>
                        <span className="text">Bluetooth Speakers</span>
                        <span className="text">Wireless Earbuds</span>
                        <span className="text">Home Theatre</span>
                        <span className="text">Projectors</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Terms & Condition</span>
                        <span className="text">contact Us</span>
                    </div>
                </div>

                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            ASHUSTORE 2023 CREATED BY ASHUTOSH VERMA.
                        </div>
                        <div><img src={Payment} alt="payment" /></div>
                    </div>
                </div>



            </footer>
        </>
    );
};

export default Footer;
