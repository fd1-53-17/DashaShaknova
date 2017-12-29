function min(a, b) {
    console.log(arguments);
    if (a <= b) {
        return a;
    }
    else {
        return b;

    }

}

function max(a, b) {
    console.log(arguments);
    if (a => b) {
        return b;
    }
    else {
        return a;
    }

}
console.log(max(60, 54, 46, 24));
min(1, 2, 3);
max(7, 9, 4);