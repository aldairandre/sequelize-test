import { DataTypes } from "sequelize"

const user = {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
  },
  name : {
    type : DataTypes.STRING,
    allowNull : false
  },
  email : {
    type : DataTypes.STRING,
    allowNull : false,
    unique : true
  },
  cell : {
    type : DataTypes.INTEGER,
    allowNull : false,
    unique : true
  }
}

export {user}