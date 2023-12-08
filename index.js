const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const router = express.Router();

const accessKey = {
  developer_id: "2e3be3e9-e42e-446d-909c-ab8bdd60c1d3",
  key_id: "af79a37e-39cf-426b-a153-b5826cc2a305",
  signing_secret: "W6z_poOSWyFNtAgdoPxIeXcJ2hTIxXSeuqTN0TywIbw",
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

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

const OLDdata = [
  { label: "Jan 09", totalSales: 480, extrasSales: 320 - 300 },
  { label: "Jan 10", totalSales: 580, extrasSales: 400 - 300 },
  { label: "Jan 11", totalSales: 550, extrasSales: 450 - 300 },
  { label: "Jan 12", totalSales: 600, extrasSales: 350 - 300 },
  { label: "Jan 13", totalSales: 700, extrasSales: 550 - 300 },
  { label: "Jan 14", totalSales: 800, extrasSales: 650 - 500 },
  { label: "Jan 15", totalSales: 700, extrasSales: 700 - 500 },
  { label: "Jan 16", totalSales: 650, extrasSales: 500 - 300 },
  { label: "Jan 17", totalSales: 600, extrasSales: 600 - 300 },
  { label: "Jan 18", totalSales: 550, extrasSales: 400 - 300 },
  { label: "Jan 19", totalSales: 700, extrasSales: 600 - 500 },
  { label: "Jan 20", totalSales: 800, extrasSales: 700 - 500 },
  { label: "Jan 21", totalSales: 700, extrasSales: 600 - 500 },
  { label: "Jan 22", totalSales: 810, extrasSales: 550 - 500 },
  { label: "Jan 23", totalSales: 950, extrasSales: 750 - 500 },
  { label: "Jan 24", totalSales: 970, extrasSales: 600 - 500 },
  { label: "Jan 25", totalSales: 900, extrasSales: 700 - 500 },
  { label: "Jan 26", totalSales: 950, extrasSales: 800 - 500 },
  { label: "Jan 27", totalSales: 850, extrasSales: 700 - 500 },
  { label: "Jan 28", totalSales: 900, extrasSales: 600 - 500 },
  { label: "Jan 29", totalSales: 800, extrasSales: 800 - 500 },
  { label: "Jan 30", totalSales: 950, extrasSales: 700 - 500 },
  { label: "Jan 31", totalSales: 1100, extrasSales: 800 - 500 },
  { label: "Feb 01", totalSales: 1200, extrasSales: 900 - 500 },
  { label: "Feb 02", totalSales: 1250, extrasSales: 800 - 500 },
  { label: "Feb 03", totalSales: 1400, extrasSales: 950 - 500 },
  { label: "Feb 04", totalSales: 1500, extrasSales: 1000 - 500 },
  { label: "Feb 05", totalSales: 1400, extrasSales: 1100 - 500 },
  { label: "Feb 06", totalSales: 1450, extrasSales: 900 - 500 },
];

app.get("/hotelData", (req, res) => {
  res.json(OLDdata);
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
