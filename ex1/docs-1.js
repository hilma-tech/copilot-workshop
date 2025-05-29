function fn(arr) {
    let r = 0;
    for (let i = 0; i < arr.length; i++) {
        r += arr[i];
    }
    return r;
}

function test1() {
    const arr = [1, 2, 3, 4, 5];
    const result = fn(arr);
    console.log(result); // Output: 15

    const arr2 = [10, 20, 30];
    const result2 = fn(arr2);
    console.log(result2); // Output: 60

    if (result === 15 && result2 === 60) {
        console.log("Success!");
    } else {
        console.log("Failure!");
    }
}

