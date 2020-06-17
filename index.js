// Add your functions here
function map(numArr, func) {
    let newArr = [];
    numArr.map(ele => {
        newArr.push(func(ele));
    });
    return newArr;
}

function reduce(sourceArray, func, startingPoint) {
    let start = (!!startingPoint) ? startingPoint : sourceArray[0];
    let i = (!!startingPoint) ? 0 : 1;
    for (; i < sourceArray.length; i++) {
        start = func(sourceArray[i], start)
    }
    return start;
}