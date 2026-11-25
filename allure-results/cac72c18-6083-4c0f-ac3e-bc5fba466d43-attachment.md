# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_pet.spec.js >> Pet Store API Tests >> Update pet details
- Location: tests/e2e_pet.spec.js:47:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Test Pet 1"
Received: "Test Pet"
```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test';
  2   | 
  3   | test.describe('Pet Store API Tests', () => {
  4   | 
  5   |     test.describe.configure({mode : 'serial'})
  6   |     const baseURL = 'https://petstore.swagger.io/v2/';
  7   |     let petID;
  8   | 
  9   | 
  10  |     test('Create a pet', async ({request}) => {
  11  |     const response = await request.post(`${baseURL}pet`, {
  12  |       headers: 
  13  |       {
  14  |         'accept': 'application/json'
  15  |       },
  16  |       
  17  |       data: 
  18  |       {
  19  |         id: 123455555559,
  20  |         category: 
  21  |         {
  22  |         id: 123455555559,
  23  |         name: 'Test Pet'
  24  |         },
  25  |         name: 'Test Pet',
  26  |         photoUrls: ['https://contrastly.com/pet-photography-101-an-introduction/'],
  27  |         tags: 
  28  |         [
  29  |           {
  30  |             id: 123455555559,
  31  |             name: 'Test Tag'
  32  |           }
  33  |         ],
  34  |         status: 'available'
  35  |       }  
  36  |     });
  37  | 
  38  |     // Verify the response status code is 200
  39  |     expect(response.status()).toBe(200);
  40  |     const responseBody = await response.json();
  41  |     petID = responseBody.id;
  42  |     // Verify petId should not be empty
  43  |     expect(petID).toBeTruthy();
  44  | 
  45  |   });
  46  | 
  47  |     test('Update pet details', async ({request}) => {
  48  |     const response = await request.post(`${baseURL}pet/${petID}`, {
  49  |       headers:
  50  |       {
  51  |         'accept': 'application/json',
  52  |         'content-type': 'application/x-www-form-urlencoded'
  53  |       },
  54  |       
  55  |       data: 
  56  |       {
  57  |         name: 'Test Pet 1',
  58  |         status: 'sold'
  59  |       }
  60  |     });
  61  |     // Verify the response status code is 200
  62  |     expect(response.status()).toBe(200);
  63  | 
  64  |     const updatedPetResponse = await request.get(`${baseURL}pet/${petID}`, {
  65  |       headers: {
  66  |         'accept': 'application/json'
  67  |       }
  68  |     });
  69  |     expect(updatedPetResponse.status()).toBe(200);
  70  |     const responseBody = await updatedPetResponse.json();
  71  |     // Verify the pet name is updated to 'Test Pet 1'
> 72  |     expect(responseBody.name).toBe('Test Pet 1');
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  73  |     // Verify the pet status is updated to 'sold'
  74  |     expect(responseBody.status).toBe('sold');
  75  |   });
  76  | 
  77  | 
  78  |     test ('Delete pet details', async ({request}) => 
  79  |     {
  80  |     const response = await request.delete(`${baseURL}pet/${petID}`, 
  81  |       {
  82  |       headers: 
  83  |       {
  84  |         'accept': 'application/json',
  85  |         'api_key': 'special-key'
  86  | 
  87  |       },
  88  |       
  89  |       data: 
  90  |       {
  91  |         id: petID
  92  |       }
  93  |     });
  94  |     const responseBody = await response.json();
  95  |     // Verify the response status code is 200
  96  |     expect(response.status()).toBe(200);
  97  |   });
  98  | 
  99  |     test('Get pet details', async ({request}) => 
  100 |     {
  101 |     const response = await request.get(`${baseURL}pet/${petID}`,{
  102 |     headers:
  103 |     {
  104 |         'accept': 'application/json'
  105 |     }
  106 |     });
  107 |        
  108 |     // Verify the response status code is 404
  109 |     expect(response.status()).toBe(404);
  110 |     const responseBody = await response.json();
  111 |     
  112 |   });
  113 | 
  114 | }); 
  115 |   
```