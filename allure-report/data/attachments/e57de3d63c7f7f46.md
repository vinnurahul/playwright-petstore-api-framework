# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: create_pet.spec.js >> Pet Store API Tests >> Create a pet
- Location: tests/create_pet.spec.js:9:13

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test.describe('Pet Store API Tests', () => 
  4  |     {
  5  | 
  6  |         test.describe.configure({mode : 'serial'})
  7  |         const baseURL = 'https://petstore.swagger.io/v2/';
  8  |         let petID;
  9  |         test('Create a pet', async ({request}) => 
  10 |         {
  11 | 
  12 |         const response = await request.put(`${baseURL}pets`, 
  13 |             {
  14 |             data: 
  15 |                 {
  16 |                     id: 12345,
  17 |                     category: 
  18 |                 {
  19 |                 id: 12345,
  20 |                 name: 'Test Pet'
  21 |                 },
  22 |                 name: 'Test Pet',
  23 |                 photoUrls: ['https://contrastly.com/pet-photography-101-an-introduction/'],
  24 |                 tags: 
  25 |                 [
  26 |                     {
  27 |                         id: 12345,
  28 |                         name: 'Test Tag'
  29 |                     }
  30 |                 ],
  31 |                 status: 'available'
  32 |         }  
  33 |     });
> 34 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  35 |     const responseBody = await response.json();
  36 |     petID = responseBody.id;
  37 |     });
  38 | });
```