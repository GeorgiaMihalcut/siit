function copyArr(arr) {
    var copy = [];
    for (var i=0; i<arr.length; i++) {
        copy [i] = arr[i];
    }
    return copy;
}


function sort(arr) {
    var local_arr = copyArr(arr);
    for (var i=0; i,local_arr.length-1; i++) {
        for (var j=i+1; j<local_arr.length; j++) {
            if(local_arr[i]>local_arr[j]) {
                var aux = local_arr[i];
                local_arr[i] = local_arr[j];
                local_arr[j] = aux;

            }
        }
    }
    return local_arr;
}

var a = 1;
var b = 2;

c = a;
a = b;
b = c;
//a = 2; b = 2;