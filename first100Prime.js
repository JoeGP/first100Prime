#!/usr/bin/env node
var fs = require('fs');
var outfile = "first100Prime";


var isprime = function(num){
	p=2;
	var status= null;
	if(num==2){
		 status = true;
	}
	while(2<=p && p<num){
		if(num%p==0){
			status = false; 
			break;
		}
		else {
			status = true;
		}
	p++;
	}
return status;
}//primality of number


//HundredPrime() definition
var HundredPrime = function(){
	var prime = [];
	count=2;

	while(prime.length<100){
		if(isprime(count)){
			prime.push(count);
		}
	count++;
	}
fs.writeFileSync(outfile, "The first 100 prime are: \n"+prime);
}

HundredPrime(); //callback of HundredPrime()
