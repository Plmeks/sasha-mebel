import express from 'express';
import { AdminController } from '../../controllers/admin';

const router = express.Router();
const adminController = new AdminController();

router.get(['/', '/index'], adminController.index);

export { router };
