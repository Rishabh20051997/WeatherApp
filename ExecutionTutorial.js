//
/*var name='john'

function first(){
    var a ='hello';
    second();
    
    

    var x = a + this.name;
    console.log(x);
}
function second(){
    var b ='hi'
    name = 'rishabh'
    third();
    var z = a + b + this.name;
    console.log(z);
}

function third(){
    var c ='hey'
    
    var z = c + this.name;
    console.log(z);
}
first();
console.log(this.name)
*/


/*var a=()=> { 20;10};

var b =a();
console.log(b)*/
//vmlinuz.oldconst fetch = require('node-fetch');

//const fetch=require('fetch')
//console.log(fetch)

//fetch.fetchurl('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')


// const fetch = require('node-fetch')
// fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
// .then(result => console.log(result))
// .catch(error => console.log(error))




/**************Weather App Example**********/


const request = require('request');
const url = "https://api.darksky.net/forecast/5a60a9982c57ce611b07dd2dfdeb0a6a/37.8267,-122.4233"

/*******  1 way */
/*
request({ url: url}, (error,response)=>{     //Return string in Response
    const data= JSON.parse(response.body) //parse string to JSON
    console.log(data.currently)
})
*/
var getforecastUrl = function(latitude,longitude,callback_getforecast){
    const url = "https://api.darksky.net/forecast/5a60a9982c57ce611b07dd2dfdeb0a6a/" + latitude + "," + longitude;

    callback_getforecast();
}



getforecastUrl(latitude=37.8267 ,longitude=-122.4233,()=>{

    request({ url: url , json:true} /*url , json defined in API*/, (error,response)=>{  
        if(error){
            console.log("Bad Request ......No internet")
        }   
        else if(response.body.error){
            console.log("Bad Url");
        
        }
        //////we can use another condition to check if any value return or not 
        ///// by comparing body lenght to zero    response.body.currently.length ===0
        else
        {
        console.log(response.body.currently)
        } 
    })
})