import {test,expect} from '../../fixtures/apiFixtures.js'

import petData from '../../testdata/api/petData.json'

test.describe('Edit Pet API',{tag: ['@api']} ,() => 
    {
    test('Edit pet', async ({ editPetService }) => 
        {
        const editPet = petData.form
        const response = await editPetService.editPet(123455555555, editPet);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');
        
        const responseBody = await response.json();
        expect(responseBody.code).toBe(200);
        expect(responseBody.message).toBe("123455555555");
    });
});