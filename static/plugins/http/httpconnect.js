function makePostCall(url)
{
    $.get(url,function(data,status){
        console.table(data);
         var arr=data;
         $("#titleid").html( arr[Math.floor(Math.random() * arr.length)]["name"]);
    })
}

