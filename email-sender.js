let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raymond.ogaraga@gmail.com',
    pass: '.1324504Terw4q'
  }
});

var mailOptions = {
  from: 'raymond.ogaraga@gmail.com',
  to: 'raim4christ@yahoo.com',
  subject: 'Doing my checkpoint',
  text: 'lovely!'
};

transporter.sendMail(mailOptions, (err,data)=>{
  if (err) {
    console.log(err);
  } 
  else {
    console.log('Message  sent: ' + data.response);
  }
});