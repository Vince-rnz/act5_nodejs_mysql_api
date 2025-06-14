const nodemailer = require('nodemailer');
const config = require('config.json');

module.exports = sendEmail;

async function sendEmail({to, subject, html, from = config.emailFrom}) {
    const transport = nodemailer.createTransport(config.smtpOptions);
    await transport.sendMail({from, to, subject, html}); 
}