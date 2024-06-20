const catchAsyncErrors = require("../middleWare/catchAsyncErrors");
const sendEmail = require("../utils/sendEmail");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });
  sendEmail({
    email: req.user.email,
    subject: "Your Ecommerce Invoice",
    message: "Thank you for your purchase. Your invoice is attached.",
  });
  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
