const express = require('express');
const router = express.Router();

// Mock database for demo purposes
const campaigns = [
  {
    id: 'c1',
    title: 'Open Source Security Audit',
    description: 'Fund an independent security audit of our Soroban smart contracts.',
    targetAmount: 50000,
    raisedAmount: 12500,
    status: 'ACTIVE',
    escrowContractId: 'C_MOCK_CONTRACT_123',
    beneficiary: 'GABC...',
  },
  {
    id: 'c2',
    title: 'Stellar Content Creation Bounty',
    description: 'Write 10 technical articles about Soroban on Stellar.',
    targetAmount: 2000,
    raisedAmount: 2000,
    status: 'FUNDED',
    escrowContractId: 'C_MOCK_CONTRACT_456',
    beneficiary: 'GDEF...',
  }
];

// Get all campaigns
router.get('/', (req, res) => {
  res.json(campaigns);
});

// Create a new campaign
router.post('/', (req, res) => {
  const { title, description, targetAmount, beneficiary } = req.body;
  
  if (!title || !targetAmount || !beneficiary) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newCampaign = {
    id: `c${campaigns.length + 1}`,
    title,
    description,
    targetAmount,
    raisedAmount: 0,
    status: 'ACTIVE',
    escrowContractId: null, // Set later when deployed
    beneficiary,
  };

  campaigns.push(newCampaign);
  res.status(201).json(newCampaign);
});

// Update campaign status
router.patch('/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const campaign = campaigns.find(c => c.id === id);
  if (!campaign) {
    return res.status(404).json({ error: 'Campaign not found' });
  }

  campaign.status = status;
  res.json(campaign);
});

module.exports = router;
