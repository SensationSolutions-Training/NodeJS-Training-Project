function fibonacci(n)
{
    let n1=0;
    let n2=1;
    console.log(n1)
    console.log(n2)
    let sum=0;
    for(let i=1; i<=n ; i++){
        sum=n1+n2;
        console.log(sum)
        n1=n2;
        n2=sum;
    }    
}
fibonacci(7)
