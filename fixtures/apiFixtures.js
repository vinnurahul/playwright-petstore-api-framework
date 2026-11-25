import { test as base } from '@playwright/test'

import { GetPetIDService } from '../services/GetPetIDService'

import { CreatePetService } from '../services/CreatePetService'

import { DeletePetService } from '../services/DeletePetService'

import { EditPetService } from '../services/EditPetService'

import { CreateOrderService } from '../services/CreateOrderService'

import { GetOrderService } from '../services/GetOrderService'

import { DeleteOrderService } from '../services/DeleteOrderService'

import { CreateUserService } from '../services/CreateUserService'

import { GetUserService } from '../services/GetUserService'

import { DeleteUserService } from '../services/DeleteUserService'

import { UpdateUserService } from '../services/UpdateUserService'

export  const test =base.extend
({
    getPetIDService: async ({ request }, use) => 
    {
        await use(new GetPetIDService(request));
    },
    createPetService: async ({ request }, use) => 
    {
        await use(new CreatePetService(request));
    },
    deletePetService: async ({ request }, use) => 
    {
        await use(new DeletePetService(request));
    },
    editPetService: async ({ request }, use) => 
    {
        await use(new EditPetService(request));
    },
    createOrderService: async ({ request }, use) => 
    {
        await use(new CreateOrderService(request));
    },
    getOrderService: async ({ request }, use) => 
    {
        await use(new GetOrderService(request));
    },
    deleteOrderService: async ({ request }, use) => 
    {
        await use(new DeleteOrderService(request));
    },
    createUserService: async ({ request }, use) => 
    {
        await use(new CreateUserService(request));
    },
    getUserService: async ({ request }, use) => 
    {
        await use(new GetUserService(request));
    },
    deleteUserService: async ({ request }, use) => 
    {
        await use(new DeleteUserService(request));
    },
    updateUserService: async ({ request }, use) => 
    {
        await use(new UpdateUserService(request));
    }

})

export {expect} from '@playwright/test'