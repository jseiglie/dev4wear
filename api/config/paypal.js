const paypal = require('paypal-rest-sdk');
paypal.configure({
  'mode': process.env.NODE_ENV_PAYPAL_MODE, //sandbox or live
  'client_id': process.env.NODE_ENV_PAYPAL_ID,
  'client_secret': process.env.NODE_ENV_PAYPAL_SECRET
});