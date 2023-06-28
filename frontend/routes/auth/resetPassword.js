const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.post("/api/users/reset_password", async (req, res) => {
  const { email } = req.body;

  const body = JSON.stringify({
    email,
  });

  console.log(body);

  try {
    const apiRes = await fetch(
      `${process.env.API_URL}/auth/users/reset_password/`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      }
    );

    return res.status(apiRes.status).json({ success: 'Verify your email' });
  } catch (err) {
    return res.status(500).json({
      error: "Something went wrong when reseting password",
    });
  }
});

module.exports = router;
