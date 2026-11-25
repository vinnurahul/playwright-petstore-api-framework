import {test, expect} from '../../fixtures/apiFixtures.js'

import orderData from '../../testdata/api/orderData.json'

test.describe('Create Order API', {tag:['@api']},() => 
    {
    test('create new order', async ({ createOrderService }) => {
        const newOrder = orderData.newOrder;
        const response = await createOrderService.createOrder(newOrder);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');

        const responseBody = await response.json();
        expect(responseBody.complete).toBe(true);
    });
});