import { Router } from "express";
import { Request,Response } from "express";

const router = Router();

router.get('/',(req: Request,res: Response) =>{
    res.json({message:"Welcome to ToDoList-Api"})
});

export default router;