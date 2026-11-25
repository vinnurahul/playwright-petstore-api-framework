import { BaseService } from "./BaseService";

export class EditPetService extends BaseService 
{
  constructor(request) 
  {
    super(request);
  }

  async editPet(petId, petData) 
  {
    const formData = new URLSearchParams(petData).toString();
    return await this.post(`pet/${petId}`, formData,
    {
        'accept': 'application/json',
        'content-Type': 'application/x-www-form-urlencoded'
    });
  }
}
