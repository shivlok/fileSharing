const nodemailer = require("nodemailer");
 async function sendMail ({ from, to, subject, text, html}){
        let transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: process.env.MAIL_USER, // generated ethereal user
                pass: process.env.MAIL_PASSWORD, // generated ethereal password
            },
        });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `inShare <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}
module.exports=sendMail;