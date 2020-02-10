const mogoose = require('mongoose');

const taskSchema =new mogoose.Schema(
{
    name :{
        type : String,
        required : true

    },
    completed :{
        type : Boolean,
        required : true
    },
   
    user: [
        {
            type :mogoose.Schema.Types.ObjectId,
            ref :'User'
        }
    ]
},{timestamps:true}) //time stamps use for auto create and modification date in DB


module.exports =mogoose.model('User',userSchema);