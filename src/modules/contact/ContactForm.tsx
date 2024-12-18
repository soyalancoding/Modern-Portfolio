import { useState } from "react";
// Components
import AlanCardGlobal from "@/shared/components/AlanCardGlobal";
import AlanTitle from "@/shared/components/AlanTitle";
import AlanText from "@/shared/components/AlanText";
import AlanInput from "@/shared/components/AlanInput";
import AlanButton from "@/shared/components/AlanButton";
// Helpers
import { checkEmailJson } from "@/shared/helpers/handleCheck";
import { sendEmailData, sendEmailThanks } from "@/shared/api/emailApi";
import { pushNotification } from "@/shared/helpers/handleNotifications";

function ContactForm() {
  const emptyContactData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [contactData, setContactData] = useState(emptyContactData);

  function onHandleContact(value: string, id: string) {
    switch (id) {
      case "name":
        setContactData({ ...contactData, name: value });
        break;
      case "email":
        setContactData({ ...contactData, email: value });
        break;
      case "subject":
        setContactData({ ...contactData, subject: value });
        break;
      case "message":
        setContactData({ ...contactData, message: value });
        break;
      default:
        break;
    }
  }

  async function onHandleSubmit() {
    if (!checkEmailJson(contactData)) {
      pushNotification(
        "error",
        "Verifica que los datos ingresados sean correctos",
        "light",
      );
      return;
    }

    try {
      pushNotification("info", "Enviando correo...", "light");
      const response = await sendEmailData(contactData);

      if (response) {
        const responseThanks = await sendEmailThanks(contactData);

        if (responseThanks) {
          pushNotification(
            "success",
            "Correo enviado con éxito, gracias por contactarme",
            "light",
          );
          setContactData(emptyContactData);
        } else {
          throw new Error("No se pudo enviar el correo de agradecimiento");
        }
      }
    } catch (error) {
      pushNotification("error", "No se pudo enviar el correo", "light");
    }
  }

  return (
    <>
      <div className="mt-6 xl:mt-0">
        <AlanTitle type="title" color="black" size="xxxlarge" weight="bold">
          Contacto
        </AlanTitle>

        <div className="mt-6">
          <AlanCardGlobal>
            <AlanTitle type="title" color="black" size="large" weight="bold">
              Enviame un mensaje
            </AlanTitle>

            <AlanText type="text" color="black" weight="default" size="small">
              Si tienes alguna pregunta o quieres saber más sobre mis servicios,
              no dudes en contactarme.
            </AlanText>

            <div className="mt-6">
              <AlanInput
                onHandleChange={(value: string, id: string) =>
                  onHandleContact(value, id)
                }
                type="text"
                value={contactData.name}
                name="Nombre"
                id="name"
                placeholder="Escribe tu nombre"
              />
              <AlanInput
                onHandleChange={(value: string, id: string) =>
                  onHandleContact(value, id)
                }
                type="email"
                value={contactData.email}
                name="Correo"
                id="email"
                placeholder="Escribe tu correo"
              />
              <AlanInput
                onHandleChange={(value: string, id: string) =>
                  onHandleContact(value, id)
                }
                type="text"
                value={contactData.subject}
                name="Asunto"
                id="subject"
                placeholder="Escribe el asunto del correo"
              />
              <AlanInput
                onHandleChange={(value: string, id: string) =>
                  onHandleContact(value, id)
                }
                type="textarea"
                value={contactData.message}
                name="Mensaje"
                id="message"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <div className="mt-10">
              <AlanButton fit={false} clickButton={() => onHandleSubmit()}>
                <AlanText type="text" color="white" weight="default">
                  Enviar
                </AlanText>
              </AlanButton>
            </div>
          </AlanCardGlobal>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
