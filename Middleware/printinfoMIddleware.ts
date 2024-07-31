import express, {Response,Request, NextFunction }  from "express";
const logRequest = (req:Request, res:Response, next:NextFunction)=> {
console.log(`${new Date().toLocaleDateString()}-${req.url}-${req.method}`)
 next()
}
export {logRequest}