const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ orgin:true , credentials:true }));

const stripe = require("stripe")("sk_test_51MreVtSIrm3qnuVZARFrogK5osFNaGBokCzF2sEsezVjweRcE9FnhSlo5u5KHxnIVMEjwYRQv8bJsMlelC4nzang00BTMYYTTj");

app.post("/checkout", async (req,res,next) => {
  console.log(req.body.items.orginalrate);
  try {
const session = await stripe.checkout.sessions.create({

  line_items: req.body.items.map((item)=>({

price_data: {
  currency: "IND",
  product_data: {
    name: item.name ,
  },
  unit_amount: 876 ,
},
quantity:1,
  })),
  mode: "payment",
  success_url:"http://localhost:8000/success.html",
  cancel_url: "http://localhost:8000/cancel.html",
});

res.status(200).json(session);
  } catch (error) {
  next(error);
  }
} );

app.listen(8000, () => console.log('app is running on 4242'));
