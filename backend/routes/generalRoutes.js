const express = require('express');
const orderController = require("../controllers/orderController")
const customerController = require("../controllers/customerController");
const router = express.Router();


router.get('/getTotalSalesOverTime/:timeline',orderController.getTotalSales)
router.get('/getgrowth/:timeline',orderController.getGrowth)
router.get('/getnewcustomer/:timeline',customerController.getNewCustomers)
router.get('/noofrepeatcustomer/:timeline',orderController.getRepeatCustomers)
router.get('/getGeographicalDistribution',customerController.getGeoDistribution)
router.get('/getclv',orderController.getClv);

module.exports = router