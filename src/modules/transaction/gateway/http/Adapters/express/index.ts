import { Request, Response, Handler } from 'express';

export type IExpressAdapter = {
    body?: any;
    params?: any;
    query?: any;
}

export function expressAdapter(handler: any): Handler {
    return async (request: Request, response: Response): Promise<Response> => {
        const body = request.body;
        const query = request.query;
        const params = request.params;

        const result = await handler({ body, query, params });

        return response.status(200).json(result);
    }
} 
