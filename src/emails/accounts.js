// const sgMail = require("@sendgrid/mail");
// const sendgridAPIKey =
//   "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";

// sgMail.setApiKey(sendgridAPIKey);

// sgMail.send({
//   to: "lalwillcode@gmail.com",
//   from: "lalkrishna@2299@gmail.com",
//   subject: "First from sendgrid",
//   text: "Will reach to you for sure",
// });

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "lalkrishna2299@gmail.com",
    subject: "Welcome to task-manager",
    text: `Welcome to the app ${name}.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "lalkrishna2299@gmail.com",
    subject: "Sorry to see you go",
    text: `goodbye ${name}. I hope will see you again`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
