import  {BaseService} from "./BaseService"

export  class GetOrderService extends BaseService 
{
    constructor(request) 
    {
        super(request);
    }

    async getOrder(orderId) 
    {
        return await this.get(`store/order/${orderId}`,
            {
                'accept': 'application/json'
            });
    }
}