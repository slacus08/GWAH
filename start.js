$(document).ready(function() {

	// this should be an object.  Needs player username/playerpoints
	var players = [];

	var cardsInPlay = [];

	var czar;

	var username;

//whe a player clicks start...
	$('.divWithStart').on('click', '.startbutton', function() {
		//Saves username. 
		//checks for 4 players.  If 4, assigns Czar and redirects everyone accordingly. 
		username = $(this).data("username"); 
		gameStartPlayers();
		//deals 8 cards to all players
		play8or1();
		//deals card everyone is playing to.
		cardPickPlayTo()
	});

//when a user selects a card...
	$('.divWithUserCards').on('click', '.card', function() {
		// their card info will be saved and 'display card' function will run(depending on conditions);
		cardSelected = $(this).attr("id");
		username = $(this).data("username");
		displayPlayedCards();
	});

//when czar choses a card...
	$('.divWithPlayedCards').on('click', '.card', function() {
		if(username == czar) {
			awardPointCzarPick();
		} else {
			alert("You are not the Czar! You may not pick...");
		}
		//point is awarded to user who's card is selected. 
	});


//at this point, we need a modal asking everyone if they would like to play another round. 
//Make it a functions and include it after the Czar has picked a card.  


	// randomly pick czar

	function czarPick() {

		var playerIndex;
		var czarPlayed=[];

		//no one has played czar yet. 

		if(czarPlayed.length == 0) {
			playerIndex = Math.random() * (players.length - 1) + 1;
			var czar = players[players.indexOf(playerIndex)];
			czarPlayed.push(czar);

		//one or more people have played czar
		} else {
			playerIndex = playerIndex + 1;
			czar = players.indexOf(playerIndex);

			if (czar >= players.length) {
				playerIndex = 0;
				czar = players.indexOf(playerIndex);
			}; 
		};
	};


	function cardPickPlayTo() {

		//picks a random card and removes that card from the list.
		//creates a count for the number of cards.

		var count;

		var cardsFromSql = [];

		var playCard;

		var indexOfCard =  Math.floor(Math.random() * (Math.max.apply(Math, cardsFromSql) - Math.min.apply(Math, cardsFromSql)) + Math.min.apply(Math, cardsFromSql));

		playCard = cardsFromSql.indexOf(indexOfCard);

		if (cardsFromSql.length > 0) {
	    	cardsFromSql.splice(indexOfCard, 1);
	    	count ++;
		}

	// generate random#.  Take that number as the index and play that card. 


	};

	function play8or1() {

		//picks 8 cards. Removes those cards from the list.

		var countPlay8;

		var whiteCards = [];

		var deal = [];

		if(deal.length == 0) {
			for(var i = 0; i < 8; i++) {
				deal.push(whiteCards[i]);
				countPlay8++;
			};

			whiteCards.splice(0, 8);	
		} else {

			for(var i = 0; i < players.length; i++) {

				var amountOfCards = players[i].cards.length;

				if( amountOfCards < 8) {
					var numberToPush = 8 - amountOfCards;

					for(var j = 0; j < numberToPush; j++) {
						deal.push(whiteCards[i])
					};
				};

				whiteCards.splice(0,amountOfCards);
			};
		}; 

	};

	//this function is not done yet.  

	function displayPlayedCards() {

			if(players.length == cardsInPlay.length) {
				$()//display html test of cards on screen. 
			}
	};


	function awardPointCzarPick() {
			// clickedOn = $(this).attr("src");
			// clickedOnId = $(this).attr("id");
			// userAwarded = **access user name here.  Same as last project?**

	}

	function gameStartPlayers() {
			// minimum of 4 players. Once three players have hit *submit* we can start to play.
			//on.click 'start', if player.length < 6, push new player to players.  
			//if at player capacity, alert("Not accepting new players"). 

			if(players.length = 4) {
				czarPick();
				for(var i = 0; i < players.length; i++) {
					if(czar == username) {
						window.location == //get page two information from lebezza
					}
				}
				//push new user array/object data to players array.
				window.location = 
			} else {
				alert("The player count it at capacity! Please wait till the next game.")
			}
	}