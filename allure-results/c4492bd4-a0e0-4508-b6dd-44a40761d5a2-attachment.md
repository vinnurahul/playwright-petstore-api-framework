# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/delete_order.spec.js >> Delete Order API >> delete order
- Location: tests/api/delete_order.spec.js:6:9

# Error details

```
ReferenceError: orderData is not defined
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/apiFixtures.js'
  2  | 
  3  | import petData from '../../testdata/api/orderData.json'
  4  | 
  5  | test.describe('Delete Order API', {tag:['@api']}, () => {
  6  |     test('delete order', async ({ createOrderService, deleteOrderService }) => {
> 7  |         const createResponse = await createOrderService.createOrder(orderData.newOrder);
     |                                                                     ^ ReferenceError: orderData is not defined
  8  |         expect(createResponse.status()).toBe(200);
  9  |         const createdOrder = await createResponse.json();
  10 |         const orderId = createdOrder.id;
  11 | 
  12 |         const response = await deleteOrderService.deleteOrder(orderId);
  13 |         expect(response.status()).toBe(200);
  14 |         expect(response.statusText()).toBe('OK');
  15 | 
  16 |         const responseBody = await response.json();
  17 |         expect(responseBody.message).toBe(String(orderId));
  18 |     });
  19 | });
  20 | 
```