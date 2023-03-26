import { EmailData, IMailProvider } from "../IMail.provider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapProvider implements IMailProvider{
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '123',
        pass: '123',
      }
  });
  }
  async sendMail(data: EmailData): Promise<void> {
      await this.transporter.sendMail({
        to: {
          name: data.to.name,
          address: data.to.email,
        },
        from: {
          name: data.from.name,
          address: data.from.email,
        },
        subject: data.subject,
        html: data.body,
      })
  }
}