const {tasks,users} =require('../constance');

module.exports ={

    Query: {
       
         tasks : () =>  tasks,
         task : ( obj , args) =>tasks.find(task => task.id === args.id),
       

   },
   Mutation :{
           createTask: (_,{input}) => {
               const task ={...input,id:"5"}
               tasks.push(task)
               return task;
           }
   },
   
   //user if you navigation proerties
   Task :
   {
       user :  ({userId}) =>{

           console.log("user id" +userId );
         return  users.find(user =>user.id === userId  )

       }
       
      
   }

}