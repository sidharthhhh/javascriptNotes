const nodemailer = require("nodemailer");
exports.sendmail = function (req, res) {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "swayam1044@gmail.com",
            pass: "hero",
        },
    });

    const mailOptions = {
        from: "Dhanesh Pvt. Ltd.<dhanesh1296@gmail.com>",
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.body,
        // html: `<a href=${pageurl}>Password Reset Link</a>`,
    };

    transport.sendMail(mailOptions, (err, info) => {
        if (err) return res.send(err);
        console.log(info);
        return res.send(
            "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox , <br/>check spam in case not found in inbox.</h1>"
        );
    });
};
