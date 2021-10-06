const express = require('express');
const controllers = require('../controllers');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/items/create', controllers.storeItem);
router.get('/items/cart', controllers.viewCart);

module.exports = router;