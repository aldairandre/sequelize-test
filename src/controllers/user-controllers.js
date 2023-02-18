import { userSchema } from "../../db.js";

export async function  getUsers (req,res,next) {
  
  try {

    const users = await userSchema.findAll()
    res.status(202).send(users);
  
  } catch (error) {
    
    res.status(500).send({error : error});

  }

}

export async function  getUser (req,res,next) {
  
  const id = req.params.id
  
  try {
    
    const user = await userSchema.findByPk(id);
    
    res.status(202).send({ user : user});
    
  } catch (error) {

    res.status(500).send({error : error});

  }
}

export async function createUser (req,res,next) {

  const user = {
    name : req.body.name,
    email : req.body.email,
    cell : req.body.cell,
  }

  try {

    const createUser = await userSchema.create(user)

    res.status(200).send({
      user : createUser
    })

  } catch (error) {

    res.status(500).send({error : error});

  }
}

export async function  editUser (req,res,next) {

  const userNewData = {
    id : req.params.id,
    name : req.body.name,
    email : req.body.email,
    cell : req.body.cell
  }

  try {

    const user = await userSchema.findByPk(userNewData.id);

    user.name = userNewData.name;
    user.email = userNewData.email;
    user.cell = userNewData.cell;

    await user.save();

    const response = {
      user : userNewData.id,
      new_data : {
        name : userNewData.name,
        email : userNewData.email,
        cell : userNewData.cell
      }
    }

    res.status(202).send(response);

  } catch (error) {

    res.status(500).send({error : error});
  
  }
}

export async function  deleteUser (req,res,next) {
  
  const id = req.params.id
  
  try {
    
    const user = await userSchema.findByPk(id);
    await user.destroy()
    
    res.status(202).send({ user : 'Delete'});
    
  } catch (error) {

    res.status(500).send({error : error});

  }
}