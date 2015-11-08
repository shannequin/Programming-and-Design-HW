//This is the main function.
function main(){
	
	//Get input.
	var telNum = getInput();

	//Translate number.
	telNum = translate(telNum);
	
	//Diplays translated number.
	display(telNum);
};

//This function gets telephone number.
function getInput(){
	var telNum = prompt("Enter 10-digit phone number. (ex: XXX-XXX-XXXX)");
	while((telNum.length != 12) && (telNum.charAt(3) != "-") && (telNum.charAt(7) != "-")){
		alert("Not a valid phone number.");
		telNum = prompt("Enter 10-digit phone number. (ex: XXX-XXX-XXXX)");
	};
	return telNum;
};


//This function translate telephone number.
function translate(telNum){
	var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

	
	//For Loop to check each digit.
	for(index = 0; index < 12; index++){
		var letter = isLetter(telNum, index);
	//If statement to check if the digit is a letter that needs to be translated.
		if(((telNum.charAt(index) >= "A") && (telNum.charAt(index) <= "Z")) || ((telNum.charCodeAt(index) >= "a") && (telNum.charAt(index) <= "z"))){
			
			//While Loop to match letter to corresponding number.
			while(count < 26 && found == false){
				
				if(telNum.charAt(count).toUpperCase() == alpha[count]){
					telNum.charAt(count) = telNum.charAt(count).replace(telNum.charAt(count, num[count]));
					alert(telNum.charAt(count));
					found = true;
				};
				count = count + 1;
			};
		};
	};
	return telNum;
};

function isLetter(telNum, index){
	var digit = telNum.char(index);
	if(toUpperCase.digit >= "A" && toUpperCase.digit <= "Z"){
		return true;
	} else{
		return false};
	};
};

//This function displays translated number.
function display(telNum){
	alert(telNum);
};

//Run main function.
main();