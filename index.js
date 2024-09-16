const mergeSort = (array = [0, 0]) => {
    const join = (a=[], b=[]) => {
        let merge = [];
        l1 = a.length;
        l2 = b.length;
        let i = 0, j = 0;
        while (i < l1 && j < l2) {
            if (a[i] <= b[j]) {
                merge.push(a[i]);
                // console.log("i = " + i + "; pushing " + a[i] + " into " + merge);
                i++;
            }
            else {
                merge.push(b[j]);
                // console.log("j = " + j + "; pushing " + b[j] + " into " + merge);
                j++;
            }
        }
        while (i < l1) {
            merge.push(a[i]);
            i++;
        }
        while (j < l2) {
            merge.push(b[j]);
            j++;
        }
        // console.log('returning merged array: ' + merge);
        return merge;
    }
    
    let end = array.length;
    let mid = Math.floor(end/2);
    let start = 0;
    // console.log("start = " + start + "; end = " + end + "; mid = " + mid);

    if (end === 1) {
        // console.log("returning array " + array);
        return array;
    };

    let a = array.slice(start, mid);
    let b = array.slice(mid, end);
    // console.log("a = " + a + "; b = " + b);
    a = mergeSort(a);
    b = mergeSort(b);
    // console.log("a = " + a + "; b = " + b);
    merge = join(a, b);
    return merge;
}

let n = 0;

let result = [];
const fibonacci = (n) => {
    // let result;
    if (n === 0) result = [];
    else if (n === 1) result = [0];
    else if (n === 2) result = [0, 1];
    else {
        let find = fibonacci(n-1);
        let len = find.length;
        result.push(find[len-1] + find[len-2]);
    }
    // console.log("result = " + result);
    return result;
}

//driver code

// console.log("Fibonacci of 8 is: " + fibonacci(8));

let array = [2, 4, 9, 1, 6, 3, 5, 7, 8, 10];

console.log("merge sort of " + array + " is " + mergeSort(array));

// mergeSort([9, 6, 1]);