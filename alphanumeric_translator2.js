/*get input: telNum
translate:
	check for letters
	change letters to numbers
display: telNum
*/

//This is the main function.
function main(){
//	var alpha = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQR", "STU", "VXYZ"];
	var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var number = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
	var again = "y";
	
	//While Loop to rerun program.
	while(again == "y"){
	//Get input.
	var telNum = getInput();
	//Translate phone number.
	telNum = translate(telNum, alpha, number);

	//Display translated number.
	display(telNum);
	
	again = prompt("Again? y/n");
	};
};

//This function gets phone number from user.
function getInput(){
	var input = prompt("Enter a 10-digit number. (ex: XXX-XXX-XXXX)")
	
	//While Loop to validate input.
	while(input.length != 12 && input.charAt(3) != "-" && input.charAt(7) != "-"){
		alert("Not a valid phone number.");
		input = prompt("Enter a 10-digit number. (ex: XXX-XXX-XXXX)");
	};
	return input;
};

//This function translates the phonen number.
function translate(telNum, alpha, number){
	var index;

	//For Loop to check each digit for letters and changes it to a number.
	for(index = 0; index < telNum.length; index++){
		
		//Check if digit is a letter.
		var letter = isLetter(telNum, index);
		if(letter){
			
			//Change a letter to a number.
			telNum = change(telNum, index, alpha, number);
		};
	};
	return telNum;
};

//This function checks if the digit is a letter.
function isLetter(telNum, index){
	var letter;
	var digit = telNum.charAt(index);
	digit = digit.toUpperCase();
	if(digit >= "A" && digit <= "Z"){
		letter = true;
	} else{
		letter = false;
	};
	return letter;
};

//This function changes a letter to a corresponding number.
function change(telNum, index, alpha, number){
	var letter = telNum.charAt(index);
	var x = letter.toUpperCase();
	var sub = alpha.indexOf(x);
	num = number[sub];
	telNum = telNum.replace(letter, num);
	return telNum;
};

//This function displays translated phone number.
function display(telNum){
	alert(telNum);
};

main();