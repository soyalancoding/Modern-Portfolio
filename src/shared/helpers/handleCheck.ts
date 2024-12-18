// Interface
import { Email } from "@/shared/interfaces/Email.interface";

export const checkEmailJson = (emailJson: Email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailJson.name ||
    emailJson.name.length < 3 ||
    !emailJson.email ||
    emailJson.email.length < 3 ||
    !emailRegex.test(emailJson.email) ||
    !emailJson.subject ||
    emailJson.subject.length < 3 ||
    !emailJson.message ||
    emailJson.message.length < 3
  ) {
    return false;
  }

  return true;
};
