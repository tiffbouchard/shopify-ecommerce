import Head from "next/head";

const Admin = () => {
  return (
    <div>
      <Head>
        <title>OJOS | Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Admin</h1>
      <h1 className="page-title">Add Products</h1>
      <form type="submit">
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
      <h1 className="page-title">Edit Homepage</h1>
    </div>
  );
};

export default Admin;
