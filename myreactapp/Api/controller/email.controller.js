import nodemailer from 'nodemailer';
export function sendMail(email,password)
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahulkumawt97@gmail.com',
    pass: 'mgsfvpjmqftzgrfo'
    
  }
});

var mailOptions = {
  from: 'rahulkumawt97@gmail.com',
  to: email,
  subject: 'verification mail PMS',
  html: "<h1>Welcome To Project Management System</h1>you have successfully registers to our site, your login creadentials are attached below<h3> username : "+email+"</h3> Password :"+password+"</h3><h2>clink on the link below to verify your account</h2>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}