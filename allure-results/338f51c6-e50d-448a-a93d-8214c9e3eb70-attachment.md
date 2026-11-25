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

Expected: 200
Received: 404
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
  48  |     const response = await request.put(`${baseURL}pet${petID}`, {
  49  |       headers:
  50  |       {
  51  |         'accept': 'application/json',
  52  |         'content-type': 'application/x-www-form-urlencoded'
  53  |       },
  54  |       
  55  |       data: 
  56  |       {
  57  |         id: petID,
  58  |         name: 'Test Pet 1',
  59  |         status: 'sold'
  60  |       }
  61  |     });
  62  |     const responseBody = await response.json();
  63  |     // Verify the response status code is 200
> 64  |     expect(response.status()).toBe(200);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  65  |   });
  66  | 
  67  |     test('Get petId details', async ({request}) => {
  68  |     const response = await request.get(`${baseURL}pet/${petID}`,{
  69  |     headers:
  70  |     {
  71  |         'accept': 'application/json'
  72  |     }
  73  |     });
  74  |        
  75  |     const responseBody = await response.json();
  76  |     // Verify the response status code is 200
  77  |     expect(response.status()).toBe(200);
  78  |     // Verify the pet name is updated to 'Test Pet 1'
  79  |     expect(responseBody.name).toBe('Test Pet 1');
  80  |     // Verify the pet status is updated to 'sold'
  81  |     expect(responseBody.status).toBe('sold');
  82  |   });
  83  | 
  84  | 
  85  |     test ('Delete pet details', async ({request}) => 
  86  |     {
  87  |     const response = await request.delete(`${baseURL}pet/${petID}`, 
  88  |       {
  89  |       headers: 
  90  |       {
  91  |         'accept': 'application/json',
  92  |         'api_key': 'special-key'
  93  | 
  94  |       },
  95  |       
  96  |       data: 
  97  |       {
  98  |         id: petID
  99  |       }
  100 |     });
  101 |     const responseBody = await response.json();
  102 |     // Verify the response status code is 200
  103 |     expect(response.status()).toBe(200);
  104 |   });
  105 | 
  106 |     test('Get pet details', async ({request}) => 
  107 |     {
  108 |     const response = await request.get(`${baseURL}pet/${petID}`,{
  109 |     headers:
  110 |     {
  111 |         'accept': 'application/json'
  112 |     }
  113 |     });
  114 |        
  115 |     // Verify the response status code is 404
  116 |     expect(response.status()).toBe(404);
  117 |     const responseBody = await response.json();
  118 |     
  119 |   });
  120 | 
  121 | }); 
  122 |   
```