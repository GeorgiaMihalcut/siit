
<!- 1.O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale -->
function Homework1(a,b) {
    if (a==b) { return true; }
    else { return false; }
}

<!- 2.O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea -->
function Homework2(a,b) {
    if (a<b) { return -1; }
    else {
        if (a==b) { return 0;}
        else { return 1;}
    }
}

<!- 3.O functie care primeste 2 valori si returneaza maximul dintre cele 2 -->
function Homework3(a,b) {
    if (a>b) {return a;}
    else {return b;}
}

<!- 4.O functie care primeste 2 valori si returneaza minimul dintre cele 2 -->
function Homework4(a,b) {
    if (a<b) {return a;}
    else {return b;}
}

<!- 5.O functie care intoarce suma primelor N numere naturale pozitive -->
function Homework5(n) {
    var suma=0;
    for (var i=1; i<=n; ++i) {
        suma=suma+i;
    }
    return suma;
}

<!- 6.O functie care verifica daca N este numar prim (restul impartirii la 1 si la N ==0) -->
function Homework6(n) {
    if ((n==1) || (n==2)) {return true;}
    else {
        for(var i=2; i<n; ++i) {
            if (n%i==0) {return false;}
        }
    }
    return true;
}

<!- 7.O functie care intoarce suma primelor N numere prime -->
function Homework7(n) {
    var suma=0;
    var nr=1;
    var count=0;
    while (count<n) {
        if (Homework6(nr)==true) {
            suma=suma+nr;
            count+=1;
        }
        nr+=1;
    }
    return suma;
}


<!- 8.O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba) -->
function Homework8(s) {
    let invers="";
    for (let i=s.length-1;i>=0;--i) {
        invers = invers+ s[i];
    }
    return invers;
}

<!- 9.O functie care intoarce produsul primelor N numere impare pozitive -->
function Homework9(n) {
    var prod=1;
    var nr=1;
    for (nr=1; nr<2*n; nr+=2) {
        prod=prod*nr;
    }
    return prod;
}


<!- 10.O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array -->
function Homework10(arr,x) {
    for(var i=0; i<arr.length; ++i) {
        if (arr[i]==x) {
            return true;
        }
    }
    return false;
}


<!- 11.O functie care intoarce maximul dintr-un array primit ca parametru -->
function Homework11(arr) {
    for (var i=0; i<arr.length-1; ++i) {
        for (var j=i+1; j<arr.length; ++j) {
            if(arr[i]>arr[j]) {
                var x=arr[i];
                arr[i]=arr[j];
                arr[j]=x;
            }
        }
    }
    return arr[arr.length-1];
}

<!- 12.O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru -->
function Homework12(arr) {
    for (var i=0; i<arr.length-1; ++i) {
        for (var j=i+1; j<arr.length; ++j) {
            if(arr[i]>arr[j]) {
                var x=arr[i];
                arr[i]=arr[j];
                arr[j]=x;
            }
        }
    }
    return (arr[0]+arr[arr.length-1]);
}

<!- 13.O functie care verifica daca exista duplicate intr-un array primit ca parametru -->
function Homework13(arr) {
    for (let i=0; i<arr.length-1; ++i) {
        for (let j=i+1; j<arr.length; ++j) {
            if (arr[i]==arr[j]) {
                return true;
            }
        }
    }
    return false;
}

<!- 14.O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru -->
function Homework14(arr) {
    var prod=1;
    for (var i=0; i<arr.length; ++i) {
        if (arr[i]>0) {
            prod=prod*arr[i];
        }
    }
    return prod;
}

<!- 15.O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba -->
function Homework15(s) {
    let invers="";
    for (let i=s.length-1;i>=0;--i) {
        invers = invers+ s[i];
    }
    if (s==invers) {return true;}
    else {return false;}
}