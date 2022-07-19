const nodemailer = require( 'nodemailer' );
require('dotenv').config()
exports.sendEmail = async ( req, res ) =>
{
    try {
        let transporter = nodemailer.createTransport( {
            host: "smtp.outlook.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USERNAME, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
        } );
    


        let message = {
            from: 'brandycype342@outlook.com', // sender address
            to: " nicholas.guantai@thejitu.com,brandiatieno@gmail.com", // list of receivers
            subject: "Appointment", // Subject line
            text: "Please see attached appointment", // plain text body
            icalEvent: {
                  // utf-8 string as an attachment
                    method:'PUBLISH',
                    path:'C:/Users/Brandy Odhiambo/Desktop/myevents.ics'
                    
                },
              
            
        }

        transporter.sendMail( message, ( error, info ) =>
        {
            if ( error )
                console.log( error )
            res.send(info)
        });

    } catch (error) {
        console.log(error)
    }
}

