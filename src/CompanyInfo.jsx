import React from 'react';
import './CompanyInfo.css'; // Import the CSS file for styling

const CompanyInfo = () => {
    return (
        <>
            <div className="containerr">
                <img src="https://media.licdn.com/dms/image/C4D0BAQHBR6tfYkTkqA/company-logo_200_200/0/1631310782115?e=2147483647&v=beta&t=u9Q6rAhaVnrDN7I5CjVFhQlJRna273KUliqkezTO5ls" alt="Company Logo" className="company-logo" />
                <div className="company-info-container">
                    <h2 className="company-info-heading text-center">Company Information</h2>
                    <div className="company-info">
                        <p><span className="info-label">Company:</span> Geeksynergy Technologies Pvt Ltd</p>
                        <p><span className="info-label">Address:</span> Sanjayanagar, Bengaluru-56</p>
                        <p><span className="info-label">Phone:</span> XXXXXXXXX09</p>
                        <p><span className="info-label">Email:</span> XXXXXX@gmail.co</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyInfo;
