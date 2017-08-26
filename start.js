$(document).ready(function() {

	// this should be an object.  Needs player username/playerpoints
	var players = [];
	// this should be an array.  Who ever is not in the array will be randomly selected as Czar.
	// once all players are in the array, random select is from the array.  
	var czar;
	
	// randomly pick czar

	

	function czarPick() {

		//no one has played czar yet.
		//this is working 
		var playerIndex;
		var czarPlayed=[];

		if(czarPlayed.length == 0) {
			playerIndex = Math.floor(Math.random() * (players.length - 0 + 1) + 0);
			czar = players[playerIndex];
			czarPlayed.push(czar);	

		//one or more people have played czar
		} else {
			if (playerIndex + 1 >= players.length) {
				playerIndex = 0; 
				czar = players[playerIndex];
				czarPlayed.push(czar);
		// czar is next in line
			} else {
				playerIndex = playerIndex + 1;
				czar = players[playerIndex]; 
			};
		};
	};


	function cardPickPlayTo() {

		//picks a random card to play. Remove that card from the list.
		//creates a count for the number of cards.

		var count;

		var cardsFromSql; //this should probably be a global variable

		var indexOfCard =  Math.floor(Math.random() * (cardsFromSql.length - 0 + 1) + 0);

		var playCard = cardsFromSql[indexOfCard];

		if (cardsFromSql.length > 0) {
	    	cardsFromSql.splice(indexOfCard, 1);
	    	count ++;
		}

		// If the length of the cards from the array, then we need to pull a new stack of cards from the database.  
		// Need an else statement here.  
	};

	function play8() {

	//picks 8 cards. Removes those cards from the list.

		var countPlay8;

		var whiteCards = [];

		var deal = [];

		for(var i = 0; i < 8; i++) {
			deal.push(whiteCards[i]);
			countPlay8++;
		};

		whiteCards.splice(0, 8);

		// need a way to check to see if the count is at 40
		// play the cards from the array deal with the index of count. 

	};

	function onClickPlayCard() {
		// run this function when someone clicks on their card
		// it will store the card information and play the card on   
		// clickedOn = $(this).attr("src");
		// clickedOnId = $(this).attr("id");

	};

	function displayPlayedCards() {

		// if the cards played == the number of (players -1) display cards
	}

	function allPlayersHave8() {
		// make sure all players have 8 cards for each round
	}

	function awardPointCzarPick() {
		// clickedOn = $(this).attr("src");
		// clickedOnId = $(this).attr("id");
		// userAwarded = **access user name here.  Same as last project?**

	}

	function gameStart() {
		// minimum of 3 players. Once three players have hit *submit* we can start to play.  
	}