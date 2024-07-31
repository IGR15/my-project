import { Request,Response } from "express";
import { Customer } from "../db/entity/Customer";
import { AppError } from "../Errors/AppError";

const createCustomer=async(payload:Customer)=>{
    const customer = await Customer.findOne({
        where:{id:payload.id, name:payload.name,mobilePhone:payload.mobilePhone}
    })
    if(customer){
        throw new AppError('Customer already exist',404,true)
    }
    const newCustomer =  Customer.create(payload);
    return newCustomer.save();

}
const removeCustomer=async(id:number)=>{
    const customer = await Customer.findOne({where:{id:id}})
    if(!customer){
        throw new AppError('Customer not found',404,true)
    }
    await customer.remove();

}
const editCustomer=async(id:number,payload:Customer)=>{
    const customer = await Customer.findOne({where:{id:id}})
    if(!customer){
        throw new AppError('Customer not found',404,true)
    }
    if(payload.name){
        customer.name = payload.name
    }
    if(payload.mobilePhone){
        customer.mobilePhone = payload.mobilePhone
    }
    return customer.save();
   

}
const getAllCustomer=async(req:Request, res:Response)=>{
    const customers = await Customer.find();
    res.json({
        messege:"getting all customers",
        customers: customers})

}
const getCustomer=async(id:number)=>{
    const customer = await Customer.findOne({where:{id:id}})
    if(!customer){
        throw new AppError('Customer not found',404,true)
    }
    return customer

}
export { createCustomer, removeCustomer, getAllCustomer, editCustomer, getCustomer}