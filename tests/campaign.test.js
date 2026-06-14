const request = require('supertest');
const app = require('../src/app');

describe('Campaign API Endpoints', () => {
    it('GET /health should return 200 OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'ok');
    });

    it('POST /api/v1/campaigns should create a new campaign', async () => {
        const res = await request(app)
            .post('/api/v1/campaigns')
            .send({
                title: 'DeFi Escrow Audit',
                description: 'Funding for professional security audit',
                goal: 5000,
                creator: 'GDTRP...3POST'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toHaveProperty('id');
        expect(res.body.data.title).toEqual('DeFi Escrow Audit');
    });

    it('GET /api/v1/campaigns should return all campaigns', async () => {
        const res = await request(app).get('/api/v1/campaigns');
        expect(res.statusCode).toEqual(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBeTruthy();
        expect(res.body.data.length).toBeGreaterThanOrEqual(1);
    });

    it('POST /api/v1/campaigns should return 400 if fields are missing', async () => {
        const res = await request(app)
            .post('/api/v1/campaigns')
            .send({
                title: 'Incomplete'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body.success).toBe(false);
    });
});
