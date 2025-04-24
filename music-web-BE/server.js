// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const path = require("path");
// const app = express();

// const musicRoute = require("./routes/musicRoute");
// app.use(cors());
// app.use(express.json());
// app.use('/api', musicRoute);
// // app.use(express.static(path.join(__dirname, "public")));

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });

import { CookieJar, Cookie } from 'tough-cookie';
import FileCookieStore from 'tough-cookie-file-store'; // Use default import

// Create a new CookieJar with the FileCookieStore
const cookieJar = new CookieJar(new FileCookieStore('./cookie.json'));

// Create a cookie to be set for Zing MP3
const cookie = Cookie.parse('foo=bar; Domain=zingmp3.vn; Path=/');

// Set the cookie for the specified URL (Zing MP3)
cookieJar.setCookie(cookie, 'http://zingmp3.vn', function (error, cookie) {
  if (error) {
    console.error('Error setting cookie:', error);
  } else {
    console.log('Cookie set successfully:', cookie);
  }
});

