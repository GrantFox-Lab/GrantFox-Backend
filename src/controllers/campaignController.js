const CampaignModel = require('../models/campaignModel');

exports.getAllCampaigns = (req, res) => {
    try {
        const campaigns = CampaignModel.getAll();
        res.status(200).json({ success: true, count: campaigns.length, data: campaigns });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

exports.createCampaign = (req, res) => {
    try {
        const { title, description, goal, creator } = req.body;
        
        if (!title || !goal || !creator) {
            return res.status(400).json({ success: false, error: 'Please provide title, goal, and creator' });
        }

        const newCampaign = CampaignModel.create({ title, description, goal, creator });
        res.status(201).json({ success: true, data: newCampaign });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

exports.getCampaign = (req, res) => {
    try {
        const campaign = CampaignModel.getById(req.params.id);
        if (!campaign) {
            return res.status(404).json({ success: false, error: 'Campaign not found' });
        }
        res.status(200).json({ success: true, data: campaign });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};
