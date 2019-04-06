import express from 'express';
import { HomeController } from '../../controllers/home/index';


const router = express.Router();
const homeController = new HomeController();

router.get('/', homeController.index);

export { router };