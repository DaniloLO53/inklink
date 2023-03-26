export interface EmailAddress {
  name: string;
  email: string;
}

export interface EmailData {
  to: EmailAddress;
  from: EmailAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(data: EmailData): Promise<void>
};
