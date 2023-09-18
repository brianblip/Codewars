function countPositivesSumNegatives(input) {
	let positiveNumbers = 0;
	let negativeNumbers = 0;
	
   if(input === null || input.length === 0) return []
  
	  for(let i = 0; i < input.length; i++){
		if(input[i] > 0){
			positiveNumbers++}     
		else if(input[i] < 0){
		  negativeNumbers += input[i]
		}
	  }
	
	
	  
	return[positiveNumbers, negativeNumbers]
  }