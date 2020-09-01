import Head from "next/head";

const Policy = () => {
  return (
    <div className="policy-container">
      <Head>
        <title>OJOS | Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Store Policy</h1>
      <div className="policy-body">
        <h4>Return and Exchange Policy</h4>
        <p>
          If you’re not satisfied with your order, we are happy to offer you
          store credit or process and exchange for eligible items. At this time,
          we do not issue refunds for orders. Returns must be requested within
          14 days of receiving your order. Eligible items must be unworn,
          unwashed, free of damage, and have the original tags. Sale items,
          jewelry, sunglasses, and gift cards are final sale and not eligible
          for returns. Customers are responsible for shipping costs associated
          with returns and exchanges.{" "}
        </p>
        <h4>Requesting a Return or Exchange</h4>
        <p>
          To request a refund or exchange of an item, email with your order
          number and items you would like to return. Once approved, we will
          email you a return label for the items. Please pack and send items
          back in their original packaging. Upon receipt of your return, you
          will receive a refund as a store credit (minus the cost of shipping).
          We have the right to deny return credits if items received do not meet
          our return criteria. In this case, the items will be sent back to the
          customer without store credit.
        </p>
        <h4>Shipping Policies</h4>
        <p>
          Please allow 10-14 days for the shipping process. Orders are typically
          processed in 3-7 days, with an additional 5-7 business days for
          shipping. If you have not received your items after 14 days, please
          reach out to for assistance. Shop-Pêche is not responsible for damaged
          or lost packages due to the shipping process. However, if you incur
          issues, email us, and we will try to assist the best we can.
        </p>
        <h4>International Orders</h4>
        <p>
          Shop-Pêche ships worldwide and provides free shipping on orders $200
          and up. Once your order is processed (about 3-7 days), your items will
          be shipped with DHL/UPS and should arrive in an additional 5-7
          business days.
        </p>
      </div>
    </div>
  );
};

export default Policy;
