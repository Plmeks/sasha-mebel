import express from 'express';
import { AdminRoutes } from '../routes/client/constants';

class AdminController {
    index = (_req: express.Request, res: express.Response) => {
        res.render(AdminRoutes.Index);
    }
}

export { AdminController };
