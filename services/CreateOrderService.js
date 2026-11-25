import { BaseService } from "./BaseService";

export class CreateOrderService extends BaseService 
{
    constructor(request) 
    {
        super(request);
    }
    async createOrder(orderData) 
    {
        return await this.post('store/order', orderData,
            {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            });
    }
}