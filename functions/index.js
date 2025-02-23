const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")
("sk_test_51HYqPuB82mjZpr6Fzd1xdlZqNcrZ5YlOuFfGpWPuJEGvXz51JX9VC71mxlQL55X0hKHWqqT6e1rprfXgtGMraJo700psZhBa8B");
//api setup

//app config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

//apiroute
app.get("/", (request, response) => response.status(200).send("hello world"))


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of the currency
    currency: "usd",
  });
  //OK -CREATED
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen comman
exports.api = functions.https.onRequest(app);
