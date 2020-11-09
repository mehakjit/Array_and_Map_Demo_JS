{// Find 2nd largest number
    let threeDigitNo = new Array();
    for(i=0;i<10;i++){
    threeDigitNo[i]=(Math.floor(Math.random() * 1000))
    }

    console.log(threeDigitNo)
    let max = 0;
    let min = 999;
    for(i=0;i<10;i++){
        max = (max<threeDigitNo[i])?threeDigitNo[i]:max
        min = (min>threeDigitNo[i])?threeDigitNo[i]:min
    }

    let max2 = 0 
    let min2 = 999
    for(i=0;i<10;i++){
            max2 = (max2<threeDigitNo[i]&&threeDigitNo[i]<max)?threeDigitNo[i]:max2
            min2 = (min2>threeDigitNo[i]&&threeDigitNo[i]>min)?threeDigitNo[i]:min2
    }

    console.log("2nd Largest No is " + max2)
    console.log("2nd Smallest No is " + min2)

    threeDigitNo.sort()
    console.log("2nd Largest No is " + threeDigitNo[8])
    console.log("2nd Smallest No is " + threeDigitNo[1])
}

{//Prime Factorisation
    let n=50
    let primeFactors = new Array()

    for(i=2;i*i<=n;i++){
        function divideMultipleTimes(){
            if (n%i==0){
                primeFactors.push(i)
                n=n/i
                divideMultipleTimes();
            }
        }
        divideMultipleTimes();
    }
    console.log(primeFactors)
}

{//pallindrome from 0 to 100
    let palindromeNumbers = new Array()
   
    for (i=11;i<100;i=i+11){
        palindromeNumbers.push(i)
    }

    console.log("Repeating digits in the range of 0-100 = " + palindromeNumbers)
}