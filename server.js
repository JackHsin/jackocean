const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Contact Email Service
const router = express.Router();
const nodemailer = require('nodemailer');
if(process.env.NODE_EVN !== 'production') require('dotenv').config();
const SMTP_APP_PASSWORD = process.env.SMTP_APP_PASSWORD;


app.prepare().then(() => {
    console.log(dev)
  const server = express()

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors());

  server.get('/server_test', (req, res) => {
    res.send(`
      <div>I'm content of web page from serversss</div>
    `);
  });


  // Contact Service
    var transport = {
        service: 'gmail',
        auth: {
            user: 'qk14000@gmail.com',
            pass: SMTP_APP_PASSWORD
        }
    }

    var transporter = nodemailer.createTransport(transport)

    transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
    });

    server.post('/send', (req, res, next) => {
        var name = req.body.name
        var email = req.body.email
        var phoneNumber = req.body.phoneNumber
        var category = req.body.category
        var message = req.body.message
        var content = `name: ${name} \ncategory: ${category} \nphoneNumber: ${phoneNumber} \nemail: ${email} \nmessage: ${message} `

        var mail = {
            from: email,
            to: 'qk14000@gmail.com',  // Change to email address that you want to receive messages on
            subject: `台灣牛, New Contact Message about ${category}`,
            text: content
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
            res.json({
                status: 'fail'
            })
            } else {
            res.json({
            status: 'success'
            })
            }
        })
    })


    //NextJS
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })

})
