import { Router } from "express";
import db from '../../db.js';

const testdbControllers = Router()

testdbControllers.get('/',async (req,res,next) => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    res.status(200).send({message : 'authorizated'})
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})

export default testdbControllers;