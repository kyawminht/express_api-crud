const app=require('./index')
const mongosse=require('mongoose');
require('dotenv').config();

mongosse.connect(process.env.CON_STR,{
    
}).then((con)=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err);
})


const port=process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});