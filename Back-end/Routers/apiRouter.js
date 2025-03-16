import express from'express';
import { adminLogin, Allcoupen, claimcoupen, ClaimHistory, coupen } from '../AdminControl/Admincontrol.js';


const adminRouter = express.Router()

adminRouter.post('/login',adminLogin)
adminRouter.post('/add-coupen',coupen)
adminRouter.post('/all-coupen',Allcoupen)
adminRouter.post('/claim-coupen',claimcoupen)
adminRouter.post('/claim-history',ClaimHistory)




export default adminRouter;
