"use strict";

let add=(int1,int2)=> int1+int2;
let subtract=(int1,int2)=> int1-int2;
let divide=(int1,int2)=> int1/int2;
let multiply=(int1,int2)=> int1*int2;


function getUserInteger(){
	/*Gets an integer from the user and returns it, else 0 if user didn't input an integer*/
	let userInt=prompt("Enter an integer: ","");
	if(Number.isInteger(+userInt)){
		console.log("It is an integer");
		console.log(typeof +userInt);
		return (+userInt);
	}
	return 0;
}


function userChooseCalculation(){
	/*the main program where the user chooses what calculation to perform*/
	let userInput; // the calculation type
	let int1,int2; // the operands
	do{
		userInput=prompt("Type a,s,d,m or c to add, subtract, divide, multiply or  cancel: ","");
		switch(userInput){
			case "c":
				alert("CANCELLED!!");
				break;
			
			case "a":
				alert("Addition");
				int1=getUserInteger();
				int2=getUserInteger();
				console.log(`int1 and int2 = ${int1},${int2}`);
				alert(add(int1,int2));
				break;

			case "s":
				alert("subtraction");
				int1=getUserInteger();
				int2=getUserInteger();
				console.log(`int1 and int2 = ${int1},${int2}`);			
				alert(subtract(int1,int2));
				break;
			case "m":
				alert("multiplication");
				int1=getUserInteger();
				int2=getUserInteger();
				console.log(`int1 and int2 = ${int1},${int2}`);
				alert(multiply(int1,int2));
				break;
			case "d":
				alert("division");
				int1=getUserInteger();
				int2=getUserInteger();
				console.log(`int1 and int2 = ${int1},${int2}`);
				alert(divide(int1,int2));
				break;
			default:
				alert("INVALID OPTION- RESTARTING CHOICE");
				break;
			}

	}while(userInput!="c");
}


userChooseCalculation();