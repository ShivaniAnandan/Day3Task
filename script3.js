var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3/all");

request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name, result[i].region, result[i].subregion, result[i].population);
    }
}