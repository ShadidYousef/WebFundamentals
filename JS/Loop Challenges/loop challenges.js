console.log("\nOdd Values Loop: ");
for (odd=1; odd<=20; odd++)
{
    if(odd%2==1)
    console.log(odd);
}

console.log("=====================\nDivisable by 3 Loop: ");
for(div3=100; div3>=0; div3--)
{
    if(div3%3==0)
    console.log(div3);
}

console.log("=====================\nSequence Loop: ");
for(seq=4; seq>=-3.5; seq-=1.5)
{
    console.log(seq);
}

console.log("=====================\nSigma Loop: ");
sum=0;
for(sigma=1; sigma<=100; sigma++)
{
    sum+=sigma;
    console.log(sum + "+");
}
console.log("\nFinal Result = " + sum);

console.log("=====================\nFactorial Loop: ");
factorial=1;
for(num=1; num<=12; num++)
{
    factorial*=num;
    console.log(num + "*");
}
console.log("Factorial of 12 = " + factorial + "\n=====================");
