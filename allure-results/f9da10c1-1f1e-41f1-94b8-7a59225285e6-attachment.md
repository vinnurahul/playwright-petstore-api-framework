# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/edit_pet.spec.js >> Edit Pet API >> Edit pet
- Location: tests/api/edit_pet.spec.js:7:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 123455555555
Received: "123455555555"
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixtures.js'
  2  | 
  3  | import petData from '../../testdata/api/petData.json'
  4  | 
  5  | test.describe('Edit Pet API',{tag: ['@api']} ,() => 
  6  |     {
  7  |     test('Edit pet', async ({ editPetService }) => 
  8  |         {
  9  |         const editPet = petData.form
  10 |         const response = await editPetService.editPet(123455555555, editPet);
  11 |         expect(response.status()).toBe(200);
  12 |         expect(response.statusText()).toBe('OK');
  13 |         
  14 |         const responseBody = await response.json();
  15 |         expect(responseBody.code).toBe(200);
> 16 |         expect(responseBody.message).toBe(123455555555);
     |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  17 |     });
  18 | });
```