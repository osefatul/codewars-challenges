//Solution:
function abbrevName(name){
    let nameArray = name.split(" ").map(fl=> fl[0]).join(".").toUpperCase();
    return nameArray
}

//Solution
function abbrevName(name){
    var nameArray = name.split(" ");
    //first index of array and then first char of that index
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

console.log(abbrevName("sefatullah omar"))