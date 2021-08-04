function seperateArray(array1, array2) {
    let newArray = array1.concat(array2);
    return newArray.filter(item => !array1.includes(item)  || !array2.includes(item));
}
console.log(seperateArray([1,2,3,5],[1,2,3,4,5]));
console.log(seperateArray(["grass","dirt","pink wool","dead shrub"], ["grass", "dirt","dead shrub"]));