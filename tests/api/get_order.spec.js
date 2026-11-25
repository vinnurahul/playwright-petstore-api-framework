import {test, expect} from '../../fixtures/apiFixtures.js'  

import orderData from '../../testdata/api/orderData.json'

test.describe('Get Order API', {tag:['@api']},() => 
    {
    test('get orderID', async ({ createOrderService, getOrderService }) =>
        {
        
        const createresponse = await createOrderService.createOrder(orderData.newOrder);
        expect(createresponse.status()).toBe(200);
        const createdOrder = await createresponse.json();
        
        const orderId = createdOrder.id;

        const response = await getOrderService.getOrder(orderId);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe('OK');

        const responseBody = await response.json();
        expect(responseBody.id).toBe(orderId);
    });
});