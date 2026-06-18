# sharif-funding-api

An Express.js REST API for tracking off-chain metadata associated with the Soroban escrow contracts, such as crowdfunding campaign titles, descriptions, and funding targets.

## API Endpoints

- `GET /api/campaigns` - List all active and funded campaigns.
- `POST /api/campaigns` - Create a new campaign.
- `PATCH /api/campaigns/:id/status` - Update campaign status.
- `GET /health` - API health check.

## Setup
```bash
npm install
npm run dev
```

Runs on port 3001 by default.
