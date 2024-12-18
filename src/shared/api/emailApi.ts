import emailjs from "@emailjs/browser";
// Interfaces
import { Email } from "@/shared/interfaces/Email.interface";

const EMAIL_SERVICE = import.meta.env.VITE_EMAIL_SERVICE;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const EMAIL_TEMPLATE_PORTFOLIO_DATA = import.meta.env
  .VITE_EMAIL_TEMPLATE_PORTFOLIO_DATA;
const EMAIL_TEMPLATE_PORTFOLIO_TANKS = import.meta.env
  .VITE_EMAIL_TEMPLATE_PORTFOLIO_TANKS;

export async function sendEmailData(dataEmail: Email) {
  let response = true;

  await emailjs
    .send(
      EMAIL_SERVICE,
      EMAIL_TEMPLATE_PORTFOLIO_DATA,
      {
        toName: dataEmail.name,
        toEmail: dataEmail.email,
        toSubject: dataEmail.subject,
        toMessage: dataEmail.message,
      },
      EMAIL_PUBLIC_KEY,
    )
    .then(
      () => {
        response = true;
      },
      (error) => {
        console.log("FAILED...", error);
        response = false;
      },
    );

  return response;
}

export async function sendEmailThanks(dataEmail: Email) {
  let response = true;

  await emailjs
    .send(
      EMAIL_SERVICE,
      EMAIL_TEMPLATE_PORTFOLIO_TANKS,
      {
        toName: dataEmail.name,
        toEmail: dataEmail.email,
      },
      EMAIL_PUBLIC_KEY,
    )
    .then(
      () => {
        response = true;
      },
      (error) => {
        console.log("FAILED...", error);
        response = false;
      },
    );

  return response;
}
