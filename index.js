//Love Calculator

first = prompt("What is your name?");
second = prompt("What is the name of your secret lover crush?");


var n = Math.random();

n = n * 100

n = Math.floor(n)+1;

console.log(n);

if (n > 70) {
   alert("Your love score is... "+ n + "%. You love each other like salt loves pepper.");
}   

if (n > 30 && n <= 70){
    alert("Your love score is... "+ n + "%.");
}

if (n <= 30){

    alert("Your love score is... "+ n + "%." + "You go together like oil and water.");
}
