const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const router = express.Router();

const accessKey = {
  developer_id: "2e3be3e9-e42e-446d-909c-ab8bdd60c1d3",
  key_id: "af79a37e-39cf-426b-a153-b5826cc2a305",
  signing_secret: "W6z_poOSWyFNtAgdoPxIeXcJ2hTIxXSeuqTN0TywIbw",
};

app.get("/generate", (req, res) => {
  const data = {
    aud: "doordash",
    iss: accessKey.developer_id,
    kid: accessKey.key_id,
    exp: Math.floor(Date.now() / 1000 + 1500),
    iat: Math.floor(Date.now() / 1000),
  };

  const headers = { algorithm: "HS256", header: { "dd-ver": "DD-JWT-V1" } };

  const token = jwt.sign(
    data,
    Buffer.from(accessKey.signing_secret, "base64"),
    headers
  );

  res.json({ token });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const axios = require('axios')

// const body = JSON.stringify({
//   external_delivery_id: 'D-1991',
//   pickup_address: '2046 Rockaway Pkwy, Brooklyn, NY 11236, United States',
//   pickup_business_name: 'Teriyaki Bowl',
//   pickup_phone_number: '+16505555555',
//   pickup_instructions: 'Enter gate code 1234 on the callbox.',
//   dropoff_address: '336 3rd St. Brooklyn, NY 11215, United States',
//   dropoff_business_name: 'Apartment L\'Opera',
//   dropoff_phone_number: '+16505555555',
//   dropoff_instructions: 'Enter gate code 1234 on the callbox.',
//   order_value: 799,
// })

// axios
//   .post('https://openapi.doordash.com/drive/v2/deliveries', body, {
//     headers: {
//       Authorization: 'Bearer ' + token,
//       'Content-Type': 'application/json',
//     },
//   })
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
