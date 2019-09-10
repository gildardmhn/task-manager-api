const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gildardmhn93@gmail.com',
        subject: 'Welcome to the Task Manager App',
        text: `Welcome to the app, ${name}. Let me know how you get along  with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gildardmhn93@gmail.com',
        subject: 'Its been a long day... Without you my friend...',
        text: `Well ${name}, its here our journey together ends. Is there something we could have done different? Let me know. Good luck!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}