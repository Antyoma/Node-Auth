const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'user@gmail.com',
    pass: '1234'
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'user@gmail.com', // sender address
    to: "user@gmail.com", // list of receivers
    subject: "Probando correo", // Subject line
    text: "Hola estimado usuario, este correo es para recuperar la contraseña olvidada del sitio web X creado con NODEJS", // plain text body
    html: "<b>Hola estimado usuario, este correo es para recuperar la contraseña olvidada del sitio web X creado con NODEJS</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

sendMail();
