    const express =require('express');
    const { ApolloServer,gql } =require('apollo-server-express');
    const cors =require('cors');
    const dotenv =require('dotenv');


    const resolvers =require('./resolvers');
    const typeDefs =require('./typeDefs');
    const {connection} =require('./database/util');

    //set enviornment  global variable

    dotenv.config();
    const app=express();
//Mongo DB connection
connection();


    //cors
    app.use(cors());
    //body parser midleware

    app.use(express.json());
//!use for not null value  and squee brackets use for array or list
   
  

    const apolloserver = new ApolloServer(

        {
            typeDefs,
            resolvers
        }
    );

    apolloserver.applyMiddleware({
        app,path:'/graphql'

    });

    const PORT =process.env.PORT || 3001;

    app.use('/',(req,res,next) =>{
        res.send({message : 'Hello  me..'});
    }  )
    
  

    app.listen(PORT,()=>
    {
        console.log(`server lsiting on Port : ${PORT}` ); //backticks sign down esc

        console.log(`Graphql Endpoint  : ${apolloserver.graphqlPath}` ); //backticks sign down esc
    } )
        
        
       