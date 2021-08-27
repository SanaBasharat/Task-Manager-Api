const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sanabasharat98@gmail.com',
        subject: 'Welcome to Sana Task App',
        text: `Welcome to the app, ${name}. Let me know how you get alone with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sanabasharat98@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Hey, ${name}. We are sorry to see you cancelling your subscription. Please let us know if we could've done something better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}