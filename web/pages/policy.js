import Head from "next/head";

import client from "../client";

const Policy = (props) => {
  const { policies = [] } = props;

  return (
    <div className="policy-container">
      <Head>
        <title>OJOS | Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Store Policy</h1>
      {policies.map((policy) => (
        <div className="policy-body">
          <h4>{policy.title}</h4>
          <p>{policy.description}</p>
        </div>
      ))}
    </div>
  );
};

Policy.getInitialProps = async () => ({
  policies: await client.fetch(`
  *[_type == "policy"]{description, title}
  `),
});

export default Policy;
