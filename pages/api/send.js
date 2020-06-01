const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, phoneNumber, category, message } = req.body

  const content = {
    to: 'qk14000@gmail.com',
    from: email,
    subject: `T台灣牛, New Contact Message about ${category}`,
    text: `name: ${name} \ncategory: ${category} \nphoneNumber: ${phoneNumber} \nemail: ${email} \nmessage: ${message}`,
    html: `name: ${name}<br>category: ${category}<br>phoneNumber: ${phoneNumber}<br>email: ${email}<br>message: ${message}`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}