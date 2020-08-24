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
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea rows="10" type="text" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
