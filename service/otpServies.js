const nodemailer = require("nodemailer");
require('dotenv').config();

const otpServices = async (email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const otp = Math.floor(100000 + Math.random() * 900000);
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP for Verification',
            text: `Your OTP is: ${otp}`
        };

        await transporter.sendMail(mailOptions);

        return ({
           message : 'OTP sent successfully'
        });
    }
    catch (error) {
        return ({
            message : `Unable to send OTP: ${error.message}`
        });
    }
};

module.exports = {
    otpServices: otpServices
};
