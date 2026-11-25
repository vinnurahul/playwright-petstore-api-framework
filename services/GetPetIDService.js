import { BaseService } from "./BaseService";

export class GetPetIDService extends BaseService {
    constructor(request) {
        super(request);
    }

    async getPetByID(petID) {
       return await this.get(`pet/${petID}`, {
        accept: 'application/json'
        });
    }
}