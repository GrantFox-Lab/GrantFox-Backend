// In-memory array to simulate a database for the MVP
let campaigns = [];
let nextId = 1;

class CampaignModel {
    static getAll() {
        return campaigns;
    }

    static create(data) {
        const newCampaign = {
            id: nextId++,
            title: data.title,
            description: data.description,
            goal: data.goal,
            raised: 0,
            status: 'active',
            creator: data.creator,
            createdAt: new Date().toISOString()
        };
        campaigns.push(newCampaign);
        return newCampaign;
    }

    static getById(id) {
        return campaigns.find(c => c.id === parseInt(id));
    }
}

module.exports = CampaignModel;
