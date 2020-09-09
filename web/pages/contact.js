import Head from "next/head";
import ContactForm from "../components/contact_form";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>OJOS | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Contact</h1>
      <p className="contact-des">
        Hola! If you would like to contact us please do so at isojos@icloud.com
        or via our contact form. We will get back to you as soon as possible.
        Have a lovely day.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
