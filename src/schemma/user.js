import { Sequelize } from "sequelize";

const user = {
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
  },
  name : {
    type : Sequelize.STRING,
    allowNull : false
  },
  email : {
    type : Sequelize.STRING,
    allowNull : false,
    unique : true
  },
  cell : {
    type : Sequelize.INTEGER,
    allowNull : false,
    unique : true
  }
}

export {user}