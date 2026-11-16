import { useEffect } from "react";
// Components
import ContactMain from "@/modules/contact/ContactMain";
import ContactForm from "@/modules/contact/ContactForm";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-0 bg-white px-[30px] py-[30px] xl:grid-cols-6 xl:gap-8 xl:px-[220px] dark:bg-neutral-950">
        <div className="col-span-2">
          <ContactMain />
        </div>

        <div className="col-span-4 mb-6">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
