const express = require('express');

const router = express.Router();
router.get('/ping', (req, res)=> {
    res.status(200).json('ping')
});
/*
router.get('/maxProductValue', archetype.kpi.MaxProductValue);

router.get('/maxProductAmountStatePurchase', archetype.kpi.MaxProductAmountStatePurchase);

router.get('/maxProductAmountStateCustomer', archetype.kpi.MaxProductAmountStateCustomer);

router.get('/maxProductAmountMoneyStatePurchase', archetype.kpi.MaxProductAmountMoneyStatePurchase);

router.get('/averageProductAmountState', archetype.kpi.AverageProductAmountState);
*/

module.exports = router;
