import {BaseService} from "./BaseService";

export class GetUserService extends BaseService{

    constructor(request)
    {
        super(request);
    }

    async getUser(userName)
    {
        return await this.get(`user/${userName}`,
            {
                'accept': 'application/json'
            });
    }
};