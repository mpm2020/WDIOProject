import apiClient from '../utils/apiClient.js'; // Asegúrate de que 'apiClient' esté exportado como ESM
import { expect } from 'chai'; // Importar 'expect' desde 'chai'

describe('API Test - ReqRes', () => {
    it('API-001: Obtener lista de usuarios paginada', async () => {
        const response = await apiClient.get('/users?page=2');
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('data');
    });

    it('API-002: Crear un nuevo usuario con datos válidos', async () => {
        const newUser = { name: 'QA Tester', job: 'Automation' };
        const response = await apiClient.post('/users', newUser);
        expect(response.status).to.equal(201);
        expect(response.data).to.include(newUser);
    });
});
