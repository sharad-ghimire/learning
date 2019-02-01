// Can can user -> auth if we wanted it to
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'users works' }));
