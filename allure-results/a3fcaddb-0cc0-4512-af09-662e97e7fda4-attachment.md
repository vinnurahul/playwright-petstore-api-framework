# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/update_pet.spec.js >> Update Pet >> Update pet details
- Location: tests/api/update_pet.spec.js:7:9

# Error details

```
TypeError: _UpdatePetService.UpdatePetService is not a constructor
```

# Test source

```ts
  1  | import { test as base } from '@playwright/test'
  2  | 
  3  | import { GetPetIDService } from '../services/GetPetIDService'
  4  | 
  5  | import { CreatePetService } from '../services/CreatePetService'
  6  | 
  7  | import { DeletePetService } from '../services/DeletePetService'
  8  | 
  9  | import { UpdatePetService } from '../services/UpdatePetService'
  10 | 
  11 | export  const test =base.extend
  12 | ({
  13 |     getPetIDService: async ({ request }, use) => 
  14 |     {
  15 |         await use(new GetPetIDService(request));
  16 |     },
  17 |     createPetService: async ({ request }, use) => 
  18 |     {
  19 |         await use(new CreatePetService(request));
  20 |     },
  21 |     deletePetService: async ({ request }, use) => 
  22 |     {
  23 |         await use(new DeletePetService(request));
  24 |     },
  25 |     updatePetService: async ({ request }, use) => 
  26 |     {
> 27 |         await use(new UpdatePetService(request));
     |                   ^ TypeError: _UpdatePetService.UpdatePetService is not a constructor
  28 |     }
  29 | 
  30 | })
  31 | 
  32 | export {expect} from '@playwright/test'
```