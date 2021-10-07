const express = require('express');
const controller = require('../controllers');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/items/create', controller.storeItem);
router.get('/items/cart', controller.viewCart);
router.post('/items/update', controller.updateItem);

module.exports = router;