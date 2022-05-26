const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {

    for (let i = 0; i < arrayToSearchThrough.length; i++){
        if (arrayToSearchThrough[i] == valueToFind){
            return arrayToSearchThrough[i];
        }
    }
    return undefined
};

function GlobalSearch(value, oldArray){
    let newArray = [];
   
    for (let i = 0; i < oldArray.length; i++){
        if (oldArray[i] == value){
            newArray.push(i);
        }
        
    }
    return newArray;


}
// // console.log(this.linearSearch(3, [1, 2, 3]));
// console.log(GlobalSearch("a", ["b", "a", "n", "a", "n", "a", "s"]))


