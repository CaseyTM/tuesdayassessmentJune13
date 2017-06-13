


function handValue(hand) {
  let countAce = 0;
  let total = 0;
  let cardValue = 0;
  for(let i = 0; i < hand.length; i++){
    cardValue = hand[i];
    if(cardValue == "J" || cardValue == "Q" || cardValue == "K"){
    	cardValue = 10;
    }if (cardValue == "A"){
    	cardValue = 1;
    }if((cardValue === 1) && (total <11)){
      	cardValue = 11;
      	countAce++;	
  	}
  	total += parseInt(cardValue);
  	// console.log(cardValue);
	if((countAce > 0) && (total > 21)){
		total -= 10;
		countAce--;
	}
	console.log(total);
  }
  return total;
}

handValue[2,2,8];

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/