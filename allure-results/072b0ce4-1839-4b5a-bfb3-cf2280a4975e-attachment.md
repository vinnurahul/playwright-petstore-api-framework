# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/create_order.spec.js >> Create Order API >> create new order
- Location: tests/api/create_order.spec.js:7:9

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
  5  | test.describe('Create Order API', {tag:['@api']},() => 
  6  |     {
  7  |     test('create new order', async ({ createOrderService }) => {
  8  |         const newOrder = petData.orderData;
  9  |         const response = await createOrderService.createOrder(newOrder);
> 10 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  11 |         expect(response.statusText()).toBe('OK');
  12 | 
  13 |         const responseBody = await response.json();
  14 |         expect(responseBody.complete).toBe(true);
  15 |     });
  16 | });
```