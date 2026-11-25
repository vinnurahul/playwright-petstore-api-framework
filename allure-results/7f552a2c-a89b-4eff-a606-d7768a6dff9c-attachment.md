# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/get_order.spec.js >> Get Order API >> get orderID
- Location: tests/api/get_order.spec.js:7:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import {test, expect} from '../../fixtures/apiFixtures.js'  
  2  | 
  3  | import petData from '../../testdata/api/petData.json'
  4  | 
  5  | test.describe('Get Order API', {tag:['@api']},() => 
  6  |     {
  7  |     test('get orderID', async ({ getOrderService }) =>
  8  |         {
  9  |         const orderId = petData.orderId;
  10 |         const response = await getOrderService.getOrder(orderId);
> 11 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  12 |         expect(response.statusText()).toBe('OK');
  13 | 
  14 |         const responseBody = await response.json();
  15 |         expect(responseBody.id).toBe(orderId);
  16 |     });
  17 | });
```