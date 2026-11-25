import { BaseService } from "./BaseService";

export  class CreatePetService extends BaseService 
{
    constructor(request) 
    {
        super(request);
    }
    async createPet(petData) 
    {
        return await this.post('pet', petData,
        {
            'accept': 'application/json',
            'content-Type': 'application/json'
        });

    }
}