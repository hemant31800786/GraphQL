const mogoose = require('mongoose');

module.exports.connection = async() =>
{
   
    try {
        await mogoose.connect(process.env.MONGO_DB_URL,{ useNewUrlParser: true,useUnifiedTopology:true}); 

        console.log("happy to first time connection  with Mongoose");
    } catch (error) {
        console.log("Unhappy to first time connection  with Mongoose" +error);
        throw errorl ;
    }
  
};