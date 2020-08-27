import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>OJOS | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Contact</h1>
      <p className="contact-des">
        Hola! If you would like to contact us please do so at or via our contact
        form. We will get back to you as soon as possible. Have a lovely day.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-form-input" />
        <input type="text" placeholder="Email" className="contact-form-input" />
        <textarea
          rows="6"
          type="text"
          placeholder="Message"
          className="contact-form-input"
        />
        <button type="submit" className="contact-form-input-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
