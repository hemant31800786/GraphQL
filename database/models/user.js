const mogoose = require('mongoose');

const userSchema =new mogoose.Schema(
{
    name :{
        type : String,
        required : true

    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    tasks: [
        {
            type :mogoose.Schema.Types.ObjectId,
            ref :'Task'
        }
    ]
},{timestamps:true}) //time stamps use for auto create and modification date in DB


module.exports =mogoose.model('User',userSchema);