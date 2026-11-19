// sum of digits

n=12345
sum=0
do{
    digit=n %10
    console.log(digit)
    sum+=digit
    n=Math.floor(n/10)
    console.log(n)
}while(n>0)

console.log(sum)