# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/get_petID.spec.js >> PetID >> Get Pet by ID
- Location: tests/api/get_petID.spec.js:5:9

# Error details

```
TypeError: getPetIDService.getPetID is not a function
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixtures.js'
  2  | 
  3  | test.describe('PetID', {tag: ['@api']}, () => 
  4  | {
  5  |     test('Get Pet by ID', async ({ getPetIDService }) => 
  6  |     {
  7  |         // Test implementation here
  8  |         // Call the api through this service (no URL inside the test)
> 9  |         const response = await getPetIDService.getPetID(123455555555);
     |                                                ^ TypeError: getPetIDService.getPetID is not a function
  10 |         
  11 |         // Check status 
  12 |         expect(response.status).toBe(200);           
  13 |         expect(response.statusText).toBe('OK');
  14 |         
  15 |         // Check Body
  16 |         const responseBody = await response.json()   
  17 |         expect(responseBody.id).toBe(123455555555);
  18 |         expect(responseBody.name).toBe('Test Pet');
  19 |     })
  20 | })
```