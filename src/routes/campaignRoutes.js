const express = require('express');
const { getAllCampaigns, createCampaign, getCampaign } = require('../controllers/campaignController');

const router = express.Router();

router.route('/')
    .get(getAllCampaigns)
    .post(createCampaign);

router.route('/:id')
    .get(getCampaign);

module.exports = router;
