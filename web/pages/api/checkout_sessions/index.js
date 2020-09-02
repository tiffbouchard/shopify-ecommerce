const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default (req, res) => {
  if (req.method === "POST") {
    const session = await stripe.checkout.sessions.create({
      success_url: "localhost:3000/success",
      cancel_url: "localhost:3000",
      payment_method_types: ["card"],
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: "payment",
      shipping_address_collection,
    });
    res.json({ id: session.id })
  }
}

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// app.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: "T-shirt",
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: "https://example.com/success",
//     cancel_url: "https://example.com/cancel",
//   });

//   res.json({ id: session.id });
// });
