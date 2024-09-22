const express = require('express');
const router = express.Router();
const ck = require('../controller/cController.js');

router.get('/', ck.char);
router.get('/about', ck.lyn);
router.get('/skills', ck.iri);
router.get('/hobbies', ck.jo);
router.get('/contact', ck.cua);

module.exports = router;