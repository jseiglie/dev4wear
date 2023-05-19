const axios = require("axios");

const auth = {
  username: process.env.NODE_ENV_PAYPAL_ID,
  password: process.env.NODE_ENV_PAYPAL_SECRET,
};

const params = new URLSearchParams();
params.append("grant_type", "client_credentials");
let data = {
  grant_type: "client_credentials",
  ignoreCache: "true",
  return_authn_schemes: "true",
  return_client_metadata: "true",
  return_unconsented_scopes: "true",
};

const application_context = {
  brand_name: "dev4Wear();",
  lading_page: "NO_PREFERENCE",
  user_action: "PAY_NOW",
  return_url: "http://localhost:3001/api/capture_order",
  cancel_url: "http://localhost:3001/api/cancel_order",
};

const create_order = async (req, res) => {
  try {
    const { value, firstName, lastName, items, description, email_address } =
      req.body;
    const order = {
      intent: "CAPTURE",
      // payer: {
      //     "email_address": email_address ? email_address : "pepe@pepe.com",
      //     "name": {
      //         "given_name": firstName ? firstName : "pepe",
      //         "surname": lastName ? lastName : "mandinga"
      //     }
      // },
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "105.70",
          },
        },
      ],
      application_context: application_context,
    };

    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: auth,
      }
    );

    const resp = await axios.post(
      `${process.env.NODE_ENV_PAYPAL_API}/v2/checkout/orders`,
      order,
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    res.json(resp.data);
  } catch (error) {
    return res.status(500).send("something went wrong, error: ", error);
  }
};

const capture_order = async (req, res) => {
  const { token, PayerID } = req.query;
  try {
    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: auth,
      }
    );
    const resp = await axios.post(
      `${process.env.NODE_ENV_PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );
    console.log("resp", resp);
    res.redirect("http://localhost:3000/payment_success");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

const cancel_order = async (req, res) => {
  res.redirect("http://localhost:3000/cart");
};

module.exports = { create_order, capture_order, cancel_order };
