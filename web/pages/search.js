import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>OJOS | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className="search-form">
        <input type="text" placeholder="Search" className="search-form-input" />
        <button type="submit" className="search-form-input-button">
          Go
        </button>
      </form>
    </div>
  );
};

export default Contact;
