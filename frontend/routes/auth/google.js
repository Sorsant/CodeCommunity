const express = require('express');
const cookie = require('cookie');
const qs = require('qs');
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));


const router = express.Router();

router.post('/api/users/google', async (req, res) => {
  const { code, state } = req.body;
  const { sessionid } = req.cookies;

  req.session.state = state

  try {
    const formData = qs.stringify({ state, code, });
    
    const config = {
      headers: {
        Accept: '*/*',
        credentials: "same-origin",
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'sessionid=' + encodeURIComponent(sessionid),
      },
      method: 'POST',
      body: formData
    };

    const apiRes = await fetch('http://localhost:8000/auth/o/google-oauth2/', config);
    const data = await apiRes.json();

    if (apiRes.status === 201) {
      res.setHeader('Set-Cookie', [
        cookie.serialize('access', data.access, {
          httpOnly: true,
          maxAge: 60 * 30,
          path: '/api/',
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        }),
        cookie.serialize('refresh', data.refresh, {
          httpOnly: true,
          maxAge: 60 * 60 * 24,
          path: '/api/',
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
        }),
      ]);

      return res.status(200).json({ success: 'Logged in successfully' });
    } else {
      return res.status(apiRes.status).json(data);
    }
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
