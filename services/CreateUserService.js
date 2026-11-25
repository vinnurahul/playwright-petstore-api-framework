import {BaseService} from "./BaseService";

export class CreateUserService extends BaseService
{
    constructor(request) 
    {
        super(request);
    }

    async createUser(userData)
    {
        return await this.post('user', userData,
            {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            });
    }     
}       