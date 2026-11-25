import {test,expect} from '../../fixtures/apiFixtures.js'

import petData from '../../testdata/api/petData.json'

test.describe('Delete Pet', () => 
{
    
    
    test('Delete pet by ID', async ({ createPetService, deletePetService }) => {
        
        const createResponse = await createPetService.createPet(petData.newPet);
        expect(createResponse.status()).toBe(200);
        expect(createResponse.statusText()).toBe('OK');

        const response = await deletePetService.deletePet(petData.newPet.id);

        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');

        const responseBody = await response.json();
        expect(responseBody.code).toBe(200);
        expect(responseBody.message).toBe(`${petData.newPet.id}`);
        

    });
});