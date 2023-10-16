import React from 'react';
import NavBar from '../../components/NavBar';
import '../welcome/Welcome.css';

const Locations = () => {
    return (
        <div>
            <NavBar />
            <div className="welcome-text">
                <h1>Quantum Financial Services Branch and ATM</h1>
                <p>
                    Welcome to the Quantum Financial Services Branch and ATM! Here, you can access a wide range of financial services and banking facilities.
                    Whether you need assistance with your accounts, want to make transactions, or simply have questions, our dedicated team is here to help you.
                </p>
            </div>
            <div className="google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10409.919574940142!2d-123.14044832353336!3d49.28625177862177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671818176d777%3A0x8c9b2ca091b78eb8!2sTD%20Canada%20Trust%20Branch%20and%20ATM!5e0!3m2!1sen!2sca!4v1697418096509!5m2!1sen!2sca"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="TD Canada Trust Branch and ATM Location"
                ></iframe>
            </div>

            <div className="welcome-text">
                <div className="contact-info">
                    <h2>Contact Information:</h2>
                    <p><strong>Address:</strong> 123 Quantum Street, Vancouver, BC V6E 4N2</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> info@quantumfinancialservices.com</p>
                    <p><strong>Hours of Operation:</strong></p>
                    <ul>
                        <li><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</li>
                        <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li>
                        <li><strong>Sunday:</strong> Closed</li>
                    </ul>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="social-media">
                <a href="https://www.facebook.com/TDCanada" target="_blank" rel="noopener noreferrer">
                    <img src="/path-to-your-facebook-logo.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com/TD_Canada?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                    <img src="/path-to-your-twitter-logo.png" alt="Twitter" />
                </a>
                <a href="https://www.youtube.com/@TDCanada" target="_blank" rel="noopener noreferrer">
                    <img src="/path-to-your-youtube-logo.png" alt="YouTube" />
                </a>
                <a href="https://www.linkedin.com/company/td/" target="_blank" rel="noopener noreferrer">
                    <img src="/path-to-your-linkedin-logo.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default Locations;
