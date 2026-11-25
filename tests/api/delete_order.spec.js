import {test,expect} from '../../fixtures/apiFixtures.js'

import orderData from '../../testdata/api/orderData.json'

test.describe('Delete Order API', {tag:['@api']}, () => {
    test('delete order', async ({ createOrderService, deleteOrderService }) => {
        const createResponse = await createOrderService.createOrder(orderData.newOrder);
        expect(createResponse.status()).toBe(200);
        const createdOrder = await createResponse.json();
        const orderId = createdOrder.id;

        const response = await deleteOrderService.deleteOrder(orderId);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');

        const responseBody = await response.json();
        expect(responseBody.message).toBe(String(orderId));
    });
});
