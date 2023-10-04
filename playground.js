//array.prototype.reduce example

var numbers = [1, 2, 3, 4, 5]

var result = numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;

}, 0)

//last 0 in the reduce method is the default because 1 does not have a prevValue.
// console.log(result)


//array.prototype.find

var numbers1 = [1, 2, 3, 4, 5, 6, 10]

var output = numbers1.find((currentValue, currentIndex, arr) => {
    return currentValue > 4;

})
// console.log(output)

//array.prototype.findIndex

var num = [10, 20, 30, 40, 50, 60]

var out = num.findIndex((currentValue, currentIndex, arr) => {
    return currentValue > 40;

})

// console.log(out)

//if output returns -1,then that element is not in the array

//array.prototype.filter
var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var final = numbers2.filter((currentValue, index, arr) => {
    return currentValue > 4;

})

// console.log(final)

//#array.prototype.slice

var array = [1, 2, 3, 4, 5]

var final1 = array.slice(1, 4)

// console.log(final1)


//array.prototype.splice

var array1 = [1, 2, 3, 4, 5, 6]

var result1 = array1.splice(1, 2, 11, 22, 33)
//first parameter->where the split will start
//second parameter->how many elements will be removed
//nexr parameters->items to be added into the array
//need to remember** splice changes the main array

console.log(array1)
console.log(result1)