# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/delete_pet.spec.js >> Delete Pet >> Delete pet by ID
- Location: tests/api/delete_pet.spec.js:7:9

# Error details

```
ReferenceError: request is not defined
```

# Test source

```ts
  1  | import { BaseService } from "./BaseService";
  2  | 
  3  | export class DeletePetService extends BaseService 
  4  | {
  5  |   constructor() 
  6  |   {
> 7  |     super(request);
     |           ^ ReferenceError: request is not defined
  8  |   }
  9  | 
  10 |   async deletePet(petId) 
  11 |   {
  12 |     //console.log(`**** Delete ${baseURL}/pet/${petId} ****`);
  13 |     return await this.delete(`pet/${petId}`,
  14 |     {
  15 |         'accept': 'application/json',
  16 |         'api-key': 'special-key'
  17 |     });
  18 | 
  19 |   }
  20 | }
```