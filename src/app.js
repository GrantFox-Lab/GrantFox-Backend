const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const campaignRoutes = require('./routes/campaignRoutes');

// Basic health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'sharif-funding-api' });
});

// Mount routers
app.use('/api/v1/campaigns', campaignRoutes);

module.exports = app;
