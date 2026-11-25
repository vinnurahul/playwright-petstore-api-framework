import {BaseService} from "./BaseService"

export class DeleteOrderService extends BaseService 
{
    async deleteOrder(orderId) 
    {
        return await this.delete(`store/order/${orderId}`,
            {
                'accept': 'application/json'
            });
    }
}