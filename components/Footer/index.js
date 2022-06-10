import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>Credits</h4>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/christian-esposito-356348102/">Christian Esposito</a></li>
                        <li><a href="https://www.linkedin.com/in/alessandro-guercio-cygnus-x1/">Alessandro Guercio</a></li>
                        <li><a href="https://www.linkedin.com/in/marco-terrana-76a12919b">Marco Terrana</a></li>
                        <li><a href="https://www.linkedin.com/in/alessandro-la-greca-336278239/">Alessandro La Greca</a></li>
                        <li><a href="https://www.linkedin.com/in/trovatoantonello/">Antonello Trovato</a></li>
                    </ul>
                </div><div className="footer-col">
                    <h4>Top Attività</h4>
                    <ul>
                        <li><a href="#">Visita duomo Milano</a></li>
                        <li><a href="#">Visita Museo Vaticano</a></li>
                        <li><a href="#">Visita Teatro Massimo</a></li>
                        <li><a href="#">Visita Valle dei Templi</a></li>
                    </ul>
                </div><div className="footer-col">
                    <h4>Top Città</h4>
                    <ul>
                        <li><a href="#">Milano</a></li>
                        <li><a href="#">Roma</a></li>
                        <li><a href="#">Palermo</a></li>
                        <li><a href="#">Napoli</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact us</h4>
                    <div className="social-links">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FiMail /></a>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <p className="final-txt">Made by green team! | 2022</p>
        
    </footer>
    )
}

export default Footer;