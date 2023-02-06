const nodemailer = require("nodemailer");
const { Subscribe } = require("../models/subscriber.model");



// send mail
const subscribeMail = (req, res)=>{

    const {email}  = req.body;
    
  
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Welcome to our new subscriber",
            html: '<h1>Congratulation</h1> <h1> You successfully sent Email </h2>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
                Subscribe.create({email})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }

}

exports.subscribeMail = subscribeMail