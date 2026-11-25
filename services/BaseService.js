export class BaseService

{
    constructor(request) 
    {
        this.request = request;
    }

    async get(url, headers={}) 
    {
        console.log(`****GET ${url}****`);
        return this.request.get(url, { headers: headers });
    }

    async post(url, body, headers={}) 
    {
        console.log(`****POST ${url}****`);
        return this.request.post(url, { data: body, headers: headers });
    }

    async put(url, body, headers={}) 
    {
        console.log(`****PUT ${url}****`);
        return this.request.put(url, { data: body, headers: headers });
    }

    async patch(url, body, headers={}) 
    {
        console.log(`****PATCH ${url}****`);
        return this.request.patch(url, { data: body, headers: headers });
    }   

    async delete(url, headers={}) 
    {
        console.log(`****DELETE ${url}****`);
        return this.request.delete(url, { headers: headers });
    }
}