const express = require('express');
const cors = require('cors');
const fundingRoutes = require('./routes/funding');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/campaigns', fundingRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3001;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Funding API listening on port ${PORT}`);
  });
}

module.exports = app;
