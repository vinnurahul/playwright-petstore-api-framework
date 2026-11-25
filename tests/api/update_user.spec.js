import {test, expect} from "../../fixtures/apiFixtures.js"

import userData from "../../testdata/api/userData.json"

test.describe("Update User API", { tag: ['@api'] }, () =>
{
    test("Update User API", async ({ createUserService, updateUserService, getUserService }) =>
    {
        // Test implementation here
        const newUser = userData.newUser
        const createresponse = await createUserService.createUser(newUser)
        //Check status
        expect(createresponse.status()).toBe(200)
        expect(createresponse.statusText()).toBe('OK')
        
        const updatedUser = userData.updateUser
        const updateresponse = await updateUserService.updateUser(updatedUser.username)
        expect(updateresponse.status()).toBe(200)
        expect(updateresponse.statusText()).toBe('OK')

        const response = await getUserService.getUser(updatedUser.username)
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe('OK')
        //Check body
        const responseBody = await response.json()
        expect(responseBody.username).toBe(updatedUser.username)
    });
});
