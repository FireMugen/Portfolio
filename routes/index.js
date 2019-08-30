var express = require('express');
var router = express.Router();
var app = express();
const ejs = require('ejs');
const serverless = require('serverless-http');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Max Reeves' });
});

router.get('/sent', (req, res, next) => {

    const subject = req.query.subject;
    const fname = req.query.fname;
    const email = req.query.lname;

    const msg = {
      to: 'maxxreeves@icloud.com',
      from: 'New.Message@Portfolio.Site',
      subject: `Porfolio Email from ${fname}`,
      text: `${email} ${subject}`,
      html: `<h1>${email}</h1><p>${subject}</p>`,
    };
    sgMail
    .send(msg)
    .then(() => {
      //Celebrate
      res.render('sent.ejs');
    })
    .catch(error => {

      //Log friendly error
      console.error(error.toString());

      //Extract error msg
      const {message, code, response} = error;

      //Extract response msg
      const {headers, body} = response;
    });

    app.use('/.netlify/functions/app', router);  // path must route to lambda

});


module.exports = router;
module.exports.handler = serverless(router);
