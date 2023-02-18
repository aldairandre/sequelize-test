import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  editUser,
  deleteUser
} from '../controllers/user-controllers.js';

const userRouters = Router();

userRouters.get('/',getUsers);
userRouters.get('/user/:id',getUser);
userRouters.post('/create',createUser);
userRouters.patch('/edit/:id',editUser);
userRouters.delete('/delete/:id',deleteUser);  

export default userRouters;