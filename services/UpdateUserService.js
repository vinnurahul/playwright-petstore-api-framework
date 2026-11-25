import {BaseService} from "./BaseService";  

export class UpdateUserService extends BaseService {
    constructor(request) {
        super(request); 
    }

    async updateUser(userName, userData) {
        return await this.put(`user/${userName}`, userData,
            {
                'accept': 'application/json'
            });
    }   
}