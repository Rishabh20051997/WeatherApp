const express = require('express')
const path =require('path')
const app = express();
const hbs =require('hbs');//to register partial
//console.log(__dirname);   // return pwd
//console.log(__filename);
/**To join Path  :   .. used to go up */

// to get path

const PublicDirectoryPath = path.join(__dirname,'../publicData'); // used to get access of publicData Folder


//hbs.registerPartials(pathname)// pathname= path.join().... where it is stored
//console.log(path.join(__dirname,'../publicData'))

app.set('view engine','hbs') // set view engine and will look to views folder to execute file
// to set customise path(means not views):- 
//app.set('views', 'fullpath')



//set up static directory
app.use(express.static(PublicDirectoryPath));   // will use that page to display and skip app.get("",()=>)


/*****simple way static */

/*
app.get('',(req,res)=>{
   // res.send("Welcome to Home Page")
    
   
   ///// To send Html File ////////
   // res.send("<h1>Welcome to home Page </h1>")

   
   
    /////////////To send Json Object ///////

    res.send({
        name:'rishabh',
        age:22
    })



    ///////////////////////Send Array JSON Object ////////////////
    // res.send([{
    //     name:rahul
    // },{
    //     name:raman
    // }])
})

*/
////////////////dynamic pages//////////


app.get('',(req,res)=>
{     
    console.log(req.query)
    
    // render used for rendering view
    res.render('index',{
        title:'Weather App'
    })
})
app.get('/help',(req,res)=>{
   // res.send("Welcome to Help Page")
   console.log(req.query)
    
   // render used for rendering view
   res.render('help',{
       title:'Weather App'
   })

})


////////// For 404 Error

app.get('*',(req,res)=>{
    res.render('404',{  // 404 is 404.hbs file in views(or in any defined location)
        name:'rishabh',
        title : '404 Error'
    })
})


app.listen(3000,()=>{
    console.log('Sever is running')
})