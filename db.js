import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
import { user } from './src/schemma/user.js';


dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE, 
  process.env.MYSQL_USER, 
  process.env.MYSQL_PASSWORD, 
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT
  }
);

const userSchema = sequelize.define('user',user);

sequelize.sync();

export { sequelize, userSchema } ;
