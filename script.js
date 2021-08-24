function gradeConverter(grade){

	if(grade >= 80 && grade <= 100){
		console.log("Your grade is A")
	} else if(grade >=75 && grade <= 79){
		console.log("Your grade is B+")
	} else if(grade >=65 && grade <= 74){
		console.log("Your grade is B")
	} else if(grade >=55 && grade <= 64){
		console.log("Your grade is C+")
	} else if(grade >=50 && grade <= 54){
		console.log("Your grade is C")
	} else if(grade >=40 && grade <= 49){
		console.log("Your grade is D")
	} else if (grade < 40 && grade === 0){
		console.log("Your grade is F")
	} else {
		console.log("score is outside parameter")
	}
}

