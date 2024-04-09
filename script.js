//for loop
// for(let i = 0; i<10;i++){
//     console.log(i);
// };

let sum = 0;
let n = prompt("enter the vluse of n");
n=Number.parseInt(n);
for(let i=1; i<n; i++){
    sum+=(i+1);
}
alert("sum of first " + n + " natural numbers is " +sum );


