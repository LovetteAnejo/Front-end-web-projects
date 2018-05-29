
/*
 * Create a list that holds all of your cards
 */
//cardList = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-diamond', 'fa-bomb'];
// list = Array.from(document.querySelectorAll('.deck>li'));//document.getElementsByClassName('deck').getElementsByTagName('li');
//console.log(list);
//var $container = $('.container');
//var $score.panel =$('.score.panel');
var card = document.getElementsByClassName('card');
var cards = [...card];
console.log(cards);
var openedCards = []; //Store all two opened cards
var matchedCard = []; //Store matched cards
var matchedcard = document.querySelector ('card match');
var moves = document.querySelector('.moves');
var moves = 0;
//var wait 420;
var $deck = document.querySelector('.deck');
var $rating = ('fa fa-star');
//var $timer = $('.timer');
var cardA = card[0];
var cardB = card[1];
//var $restart = $('.restart');
var nowTime = 0;
var matchedCard = 0;
var second = 0;
var stars3 = 14;
var stars2 = 18;
var star1 = 22;


function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
	console.log(cards + " shuffled ");
    return cards;
}

function loadGame(){
	var cards = shuffle(cards);
	$deck.empty();
	matchedCard = 0;
	$moves.text('0');
	for (let i = 0; i < cards.length; i++){
		$deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></li>'))
	}	
	addEventListener();
	
	resetTimer(nowTime);
	second = 0;
	$timer.text('$(second)')
	loadTime();
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
	console.log(cards + " shuffled ");
    
}	
 
 
function rating(moves){
	var rating = 3;
	if (moves > stars3 && moves < stars2){
		$rating.eq(3).removeClass('fa fa-star').addClass('fa fa-star-o');
	} else if (moves > star2 && moves < star1){
		rating = 2;
	} else if (moves > star1){
		$rating.eq(1).removeClass('fa fa-star').addClass('fa fa-star-o');
		rating = 1;
	}
	return { score: rating };
}

//function rating(moves, score){
	//$('#winnerText').text('In $(second) seconds, you did a total of $(moves) moves with a score of $(score);
	//$('#winnerModal').modal('toggle');
//}

//$restart.bind('click', function (confirmed){
	//if (confirmed){
	//	$rating.removeClass('fa fa-star-o').addClass('fa fa-star');
	//	loadGame();
	//}
//});



/* function checkCards(cardA, cardB) {
	console.log("Check cards!")
	if(cardA)
} */
 for (var i = 0; i < cards.length; i++){
	 card[i].addEventListener('click', showCard);
	    console.log('listened');
	    showCard(card[i]);
 }

function showCard(card) {
	card.className += " open show";
	console.log(card + " clicked!")
	
}


function matchCard(cardA, cardB) {
	console.log("Check match!")
	//console.log(cardA.firstChild.nextSibling.className);
	//console.log(cardB.firstChild.nextSibling.className);
	if (cardA.firstChild.nextSibling.className == cardB.firstChild.nextSibling.className) {
		console.log("match found!")
		cardA.className = "card match";
		cardB.className = "card match";
		//cards.pop(cardA);
		//cards.pop(cardB);
		//matched.push(cardA, cardB);
	} else {
		console.log("no match!")
		cardA.className = "card";
		cardB.className = "card";
	}
	moves += 1;
	moves.innerHTML = moves;

}	
 for (var i = 0; i < cards.length; i++) {
	(function addClick(index) {
		cards[index].addEventListener('click', () => {
			console.log(cards[index] + ' listened');
			if(openedCards.length < 2){
				openedCards.push(cards[index]);
				showCard(cards[index]);
				console.log(openedCards);
			} else if(openedCards.length === 2){
				matchCard(openedCards[0], openedCards[1])
			}
		});
	})(i);
}

/* function checkCards(cardA, cardB) {
	console.log("Check cards!")
	if(cardA)
} 


/* Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



// Add a click event listener for every card
