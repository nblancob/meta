const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.json({
        message:"Hello world"
    })

})

app.listen(3000,()=>console.log('Iniciando server en el puerto 3000'));