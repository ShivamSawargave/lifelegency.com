import express from 'express';

import {contact} from "../controller/user.controller.js";


const router = express.Router();


router.post('/contact',contact);


export default router;