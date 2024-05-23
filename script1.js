//Question
/*how to compare two json have the same properties without order  
a)let obj1 = {name : "Person 1", age:5};       
b)let  obj2 = {age:5,name:"Person 1"};*/

function sortObjectKeys(obj) {
    return JSON.stringify(
        Object.keys(obj).sort().reduce((result, key) => {
            result[key] = obj[key];
            return result;
        }, {})
    );
}

let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

//console.log(obj1);
//console.log(obj2);
console.log(sortObjectKeys(obj1) === sortObjectKeys(obj2)); // true
