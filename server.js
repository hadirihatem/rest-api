const express=require ('express')
const app=express()
const mongoose=require('mongoose')
 require('dotenv').config({path:'config/.env'})


app.use(express.json())

mongoose.connect(process.env.DB_URI, { 
    useUnifiedTopology: true,
     useNewUrlParser: true,
     useCreateIndex:true,
     useFindAndModify:false 
    },
     (error)=>{
    if(error)
      throw error

    console.log('db Connected ...')
})

app.use('/api',require('./routes/user')) 


    app.listen(6000,()=>{
        console.log('connected')
    })