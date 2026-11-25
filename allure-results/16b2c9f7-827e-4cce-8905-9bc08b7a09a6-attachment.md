# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/update_user.spec.js >> Update User API >> Update User API
- Location: tests/api/update_user.spec.js:7:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1  | import {test, expect} from "../../fixtures/apiFixtures.js"
  2  | 
  3  | import userData from "../../testdata/api/userData.json"
  4  | 
  5  | test.describe("Update User API", { tag: ['@api'] }, () =>
  6  | {
  7  |     test("Update User API", async ({ createUserService, updateUserService, getUserService }) =>
  8  |     {
  9  |         // Test implementation here
  10 |         const newUser = userData.newUser
  11 |         const createresponse = await createUserService.createUser(newUser)
  12 |         //Check status
  13 |         expect(createresponse.status()).toBe(200)
  14 |         expect(createresponse.statusText()).toBe('OK')
  15 |         
  16 |         const updatedUser = userData.updateUser
  17 |         const updateresponse = await updateUserService.updateUser(updatedUser)
> 18 |         expect(updateresponse.status()).toBe(200)
     |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  19 |         expect(updateresponse.statusText()).toBe('OK')
  20 | 
  21 |         const response = await getUserService.getUser(updatedUser.username)
  22 |         expect(response.status()).toBe(200)
  23 |         expect(response.statusText()).toBe('OK')
  24 |         //Check body
  25 |         const responseBody = await response.json()
  26 |         expect(responseBody.username).toBe(updatedUser.username)
  27 |     });
  28 | });
  29 | 
```