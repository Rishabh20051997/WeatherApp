console.log('client side javascript loaded')
fetch('http://localhost:3000/help').then((response)=>
{
    console.log("fetch response is "+response.json);
})

