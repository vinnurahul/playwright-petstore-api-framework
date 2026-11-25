import { BaseService } from "./BaseService";

export class DeletePetService extends BaseService 
{
  constructor(request) 
  {
    super(request);
  }

  async deletePet(petId) 
  {
    
    return await this.delete(`pet/${petId}`,
    {
        'accept': 'application/json',
        'api-key': 'special-key'
    });

  }
}