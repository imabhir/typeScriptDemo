var arr = [
    ["-", "-", "-"],
    ["-", "-", "-"]
];
printArray(arr);
function printArray(arr) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            console.log(arr[i][j]);
        }
        console.log();
    }
}
