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
  14 |                 headers: 
  15 |                 {
  16 |                     accept: 'application/json'
  17 |                 },
  18 |                 data: 
  19 |                 {
  20 |                     id: 123455555555,
  21 |                     category: 
  22 |                 {
  23 |                 id: 123455555555,
  24 |                 name: 'Test Pet'
  25 |                 },
  26 |                 name: 'Test Pet',
  27 |                 photoUrls: ['https://contrastly.com/pet-photography-101-an-introduction/'],
  28 |                 tags: 
  29 |                 [
  30 |                     {
  31 |                         id: 123455555555,
  32 |                         name: 'Test Tag'
  33 |                     }
  34 |                 ],
  35 |                 status: 'available'
  36 |         }  
  37 |     });
> 38 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  39 |     const responseBody = await response.json();
  40 |     petID = responseBody.id;
  41 |     
  42 |     });
  43 | });
```