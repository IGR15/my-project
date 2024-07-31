import { Router,Request,Response,NextFunction } from "express";
import { createCustomer,removeCustomer,editCustomer,getAllCustomer,getCustomer } from "../controller/customer";
import { logRequest } from "../Middleware/printinfoMIddleware";
import { Customer } from "../db/entity/Customer";

const router = Router();
router.post('/',async(req: Request, res: Response, next: NextFunction) => {
    const payload:Customer = req.body
    if(!payload.id||!payload.name){
        res.send({
            message:"missing field",
            success:false
        })
    }
    try {
        const customer =await createCustomer(payload);
        res.json({
            message:"Customer created successfully",
            success:true,
            customer: customer
        })
 
    } catch (error) {
        console.log("error"+error);
        next(error);
        
    }
})
router.delete('/:id',async(req: Request, res: Response, next:NextFunction)=> {
    const id = req.body.id
    try {
        const customer =await removeCustomer(id)
        res.json({
            messege:"Customer removed successfully",
            success:true,
            customer:customer
        })
    } catch (error) {
        console.log("error"+error);
        next(error);
        
    }

})

router.put('/:id', async(req: Request, res: Response, next:NextFunction) => {
    const id = req.body.id
    const payload:Customer = req.body
    if(!payload.id||!payload.name){
        res.send({
            message:"missing field",
            success:false
        })
    }
    try {
        const customer = await editCustomer(id, payload)
        res.json({
            message:"Customer edited successfully",
            success:true,
            customer: customer
        })
    } catch (error) {
        console.log("error"+error);
        next(error);
        
    }
})
router.get('',logRequest,getAllCustomer)
router.get('/:id',async(req: Request, res: Response, next:NextFunction)=>{
    const id = req.body.id
    try {
        const customer = await getCustomer(id)
        res.json({
            message:"Customer fetched successfully",
            success:true,
            customer:customer
        })
    } catch (error) {
        console.log("error"+error);
        next(error);
        
 
    }

})


export default router;