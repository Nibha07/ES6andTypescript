function printCapitalNames(a,b,c,d)
{
    for( i in arguments)
        console.log(arguments[i].toUpperCase());
}

var array=['Darshan','Manoj','Nisha','Megha'];
printCapitalNames(...array); 