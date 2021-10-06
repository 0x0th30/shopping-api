const express = require('express');
const controllers = require('../controllers/ItemController');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/items', controllers.storeItem);

module.exports = router;