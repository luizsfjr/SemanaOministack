const { response } = require('express');
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback([],true);
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () =>{
        const response = await request(app)
        .post('/ongs')
        .send({
                name:"APAD2",
                email:"contatof@gmail.com",
                whatsapp:"1232554561",
                city:"Rio do sul",
                uf:"PA"
            });
            
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
    
});