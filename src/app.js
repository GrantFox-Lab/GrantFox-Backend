const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'sharif-funding-api' });
});

module.exports = app;
