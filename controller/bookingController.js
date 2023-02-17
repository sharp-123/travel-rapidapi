const axios = require("axios");
let nodemailer = require('nodemailer');
const { stringify } = require("qs");
const { sort } = require("semver");

const searchLocation = (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete',
        params: { text: req.query.query, languagecode: 'en-us' },
        headers: {
            'X-RapidAPI-Key': '8bdbbd0320mshe845806b673c1bep10c05fjsn383f4db31dab',
            'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

const bookingHotel = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "4b7a1c5f8f0766",
            pass: "38a7325b02e130"
        }
    });

    const mailOptions = {
        from: 'romanrutchin@gmail.com',
        to: 'david.r.stevens.81@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { searchLocation, bookingHotel };