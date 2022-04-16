const Sequelize = require('sequelize');

const sequelize  = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASSWORD, {
    host:process.env.DB_ADDRESS,
    port: process.env.DB_PORT,    
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
  //Print raw SQL  
  //logging:  (str) => { console.log("SQL:" , str);}
  //Or not 
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })


module.exports = sequelize
