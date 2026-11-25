import { test, expect } from '../../fixtures/apiFixtures.js';

import petData from '../../testdata/api/petData.json';

test.describe('PetID', { tag: ['@api'] }, () => {
    test('Get Pet by ID', async ({ createPetService, getPetIDService }) => {
        // Call the API through this service (no URL inside the test)
        
        const createResponse = await createPetService.createPet(petData.newPet);
        expect(createResponse.status()).toBe(200);
        expect(createResponse.statusText()).toBe('OK');

        const response = await getPetIDService.getPetByID(petData.newPet.id);

        // Check status
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');

        // Check body
        const responseBody = await response.json();
        expect(responseBody.id).toBe(petData.newPet.id);
        expect(responseBody.name).toBe(petData.newPet.name);
    });
});