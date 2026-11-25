# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/delete_order.spec.js >> Delete Order API >> delete order
- Location: tests/api/delete_order.spec.js:6:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 405
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixtures.js'
  2  | 
  3  | import petData from '../../testdata/api/petData.json'
  4  | 
  5  | test.describe('Delete Order API', {tag:['@api']}, () => {
  6  |     test('delete order', async ({ deleteOrderService }) => {
  7  |         const orderId = petData.orderData.id;
  8  |         const response = await deleteOrderService.deleteOrder(orderId);
> 9  |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  10 |         expect(response.statusText()).toBe('OK');
  11 |         const responseBody = await response.json();
  12 |         expect(responseBody.message).toBe("123455555555");
  13 |     });
  14 | });
  15 | 
```