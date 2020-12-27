function arr(A1, A2) {
    var A = [], arr2 = [];

    for (var i = 0; i < A1.length; i++) {
        A[A1[i]] = true;
    }

    for (var i = 0; i < A2.length; i++) {
        if (A[A2[i]]) {
            delete A[A2[i]];
        } else {
            A[A2[i]] = true;
        }
    }

    for (var k in A) {
        arr2.push(k);
    }

    return arr2;
}

A1 = [1, 2, "a"];
A2 = [1, 3, "b"];
console.log(arr([1, 2, "a"], [1, 3, "b"]))