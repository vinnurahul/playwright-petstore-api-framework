/* import {test, expect} from '@playwright/test';

test.describe('Pet Store API Tests', () => {

    test.describe.configure({mode : 'serial'})
    const baseURL = 'https://petstore.swagger.io/v2/';
    let petID;


    test('Create a pet', async ({request}) => {
    const response = await request.post(`${baseURL}pet`, {
      headers: 
      {
        'accept': 'application/json'
      },
      
      data: 
      {
        id: 123455555559,
        category: 
        {
        id: 123455555559,
        name: 'Test Pet'
        },
        name: 'Test Pet',
        photoUrls: ['https://contrastly.com/pet-photography-101-an-introduction/'],
        tags: 
        [
          {
            id: 123455555559,
            name: 'Test Tag'
          }
        ],
        status: 'available'
      }  
    });

    // Verify the response status code is 200
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    petID = responseBody.id;
    // Verify petId should not be empty
    expect(petID).toBeTruthy();

  });

    test('Update pet details', async ({request}) => {
    const response = await request.post(`${baseURL}pet/${petID}`, {
      headers:
      {
        'accept': 'application/json'
      },
      
      form: 
      {
        name: 'Test Pet 1',
        status: 'sold'
      }
    });
    // Verify the response status code is 200
    expect(response.status()).toBe(200);

    const updatedPetResponse = await request.get(`${baseURL}pet/${petID}`, {
      headers: {
        'accept': 'application/json'
      }
    });
    expect(updatedPetResponse.status()).toBe(200);
    const responseBody = await updatedPetResponse.json();
    // Verify the pet name is updated to 'Test Pet 1'
    expect(responseBody.name).toBe('Test Pet 1');
    // Verify the pet status is updated to 'sold'
    expect(responseBody.status).toBe('sold');
  });


    test ('Delete pet details', async ({request}) => 
    {
    const response = await request.delete(`${baseURL}pet/${petID}`, 
      {
      headers: 
      {
        'accept': 'application/json',
        'api_key': 'special-key'
Avilable
      },
      
      data: 
      {
        id: petID
      }
    });
    const responseBody = await response.json();
    // Verify the response status code is 200
    expect(response.status()).toBe(200);
  });

    test('Get pet details', async ({request}) => 
    {
    const response = await request.get(`${baseURL}pet/${petID}`,{
    headers:
    {
        'accept': 'application/json'
    }
    });
       
    // Verify the response status code is 404
    expect(response.status()).toBe(404);
    const responseBody = await response.json();
    
  });

}); 
*/  