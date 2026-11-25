import {test,expect} from '../../fixtures/apiFixtures.js'

import petData from '../../testdata/api/petData.json'

test.describe('Create Pet API Tests',{ tag:['@api'] },() => 
    {
    test('New pet API', async ({ createPetService }) => 
    {
        // Test implementation here
        const newPet = petData.newPet
        const response = await createPetService.createPet(newPet)     
        //Check status
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe('OK')
        //Check body
        const responseBody= await response.json()
        expect(responseBody.id).toBe(newPet.id)
        expect(responseBody.name).toBe(newPet.name)
    });
});