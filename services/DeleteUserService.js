import {BaseService} from "./BaseService.js";

export class DeleteUserService extends BaseService{

    constructor(request)
    {
        super(request);
    }

    async deleteUser(userName)
    {
        return await this.delete(`user/${userName}`,
            {
                'accept': 'application/json'
            });
    }
}