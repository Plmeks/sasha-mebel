import express from 'express';
import { HomeController } from '../controllers/home';

const router = express.Router();
const homeController = new HomeController();

router.get(['/', '/index'], homeController.index);
router.get(['/about'], homeController.about);

export { router };
