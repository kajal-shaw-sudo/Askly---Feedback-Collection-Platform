const nodemailer = require("nodemailer");

class Mailer {
  constructor({ subject, recipients }, content) {
    this.subject = subject;
    this.recipients = recipients.map(r => r.email);
    this.content = content;
  }

  async send() {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: this.recipients,
      subject: this.subject,
      html: this.content
    });

    return { status: "Sent with Nodemailer" };
  }
}

module.exports = Mailer;
