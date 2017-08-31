$(document).ready(function() {

	//get all the info from SQL and push to firebase!

    //these variables need to be set to the list in firebase (WHICH COMES FROM SQL)
    //var cardsFromSql = [] <-- 50 cards
	//var whiteCards = [] <--50 cards


	//Every time a user joins, it needs to update to firebase WITHIN the firebase object.  
	//once we do that, we will delete this array and readjust the javascript game play text. 
	var players = ["user1", "user2", "user3", "user4"]

	//needs to come from firebase, which comes from sql
	var cardsFromSql = ["fun1", "fun2","fun3","fun4","fun5","fun6","fun7","fun8","fun9","fun10","fun11","fun12","fun13","fun14","fun15","fun16","fun17","fun18","fun19"];

	//needs to come from firebase, which comes from sql
	var whiteCards = ["WCfun1", "WCfun2","WCfun3","WCfun4","WCfun5","WCfun6","WCfun7","WCfun8","WCfun9","WCfun10","WCfun11","WCfun12","WCfun13","WCfun14","WCfun15","WCfun16","WCfun17","WCfun18","WCfun19"];
	
	//updates in firebase to true or false
	var czar;

	//once a user has played czar, this need to update in FIREBASE
	var czarPlayed=[];

	//
	var playerIndex;

	//the function that is associated with this needs to come from firebase. 
	var deal = [];


	var config = {
	    apiKey: "AIzaSyDSSNV1gjwiaCVLTvKSZwgW5wNoSZ6HMOs",
	    authDomain: "gwah-199f8.firebaseapp.com",
	    databaseURL: "https://gwah-199f8.firebaseio.com",
	    projectId: "gwah-199f8",
	    storageBucket: "",
	    messagingSenderId: "817131336094"
  	};
  
  	firebase.initializeApp(config);

  	var database = firebase.database();


	$(document).on("click", '#start', function(event) {

      event.preventDefault();

      gameStartPlayers();  

      cardPickPlayTo();

	  czarPick();


   		for(var i = 0; i < players.length; i++) {

	   	  play8or1();

		  database.ref("players").push({
		  	"cards": deal,
		  	"username": players[i], 
			"czar": true
		  });
		}

	});

	console.log("I work!");

	// database.ref().on("child_added", function(childSnapshot) { 
	// 	czar = childSnapshot.val().players.czar
	// });

	//when a user selects a card...
	$('.band').on('click', 'p', function() {
			// their card info will be saved and 'display card' function will run(depending on conditions);
		cardSelected = $('.test').html();
			// username = $(this).data("username");
			// displayPlayedCards();
		alert("I am working!");
	});


	function czarPick() {

		//no one has played czar yet. 

		if(czarPlayed.length == 0) {
			playerIndex = Math.floor(Math.random() * (players.length - 0 + 1)) + 0;
			czar = players[playerIndex];
			czarPlayed.push(czar);
			console.log(czarPlayed);
		//one or more people have played czar
		} else {

			playerIndex = playerIndex + 1;

			if (playerIndex >= players.length) {
				playerIndex = 0;
				czar = players[playerIndex];
				console.log("you looped through all the players");
			} else {
				czar = players[playerIndex];
				console.log("not 0 so just plus 1");
				console.log(czar);
			}; 			
		};
	};

//picks a random black card and removes that card from the list.
//creates a count for the number of cards.
	function cardPickPlayTo() {

		var count;

		var playCard;

		var indexOfCard =  Math.floor(Math.random() * (cardsFromSql.length - 0 + 1)) + 0;

		playCard = cardsFromSql[indexOfCard];

		if (cardsFromSql.length > 0) {
	    	cardsFromSql.splice(indexOfCard, 1);
	    	count ++;
	    	$("#play2").html(playCard);
		}

	};

	function play8or1() {
		//picks 8 cards. Removes those cards from the list.

		var countPlay8;

		// cards from sql

		var numberToPush;

		if(deal.length == 0) {
			for(var i = 0; i < 8; i++) {
				deal.push(whiteCards[i]);
				$(".card" + i).html(whiteCards[i])
				countPlay8++;
			};

			whiteCards.splice(0, 8);	
		}
		 else {

		 	//we might need this if we set up players as objects in array. 
			// for(var i = 0; i < players.length; i++) {

				//we may need this variable depending on how we structure our players variable. 
				// var amountOfCards = players[i].cards.length;

				if( deal.length < 8) {
					numberToPush = 8 - deal.length;
					for(var j = 0; j < numberToPush; j++) {
						deal.push(whiteCards[j]);
						$(".card" + j).html(whiteCards[j]);
					};
				};

				whiteCards.splice(0, numberToPush);
			};
		}; 


	function gameStartPlayers() {
			// minimum of 4 players. Once three players have hit *submit* we can start to play.
			//on.click 'start', if player.length < 6, push new player to players.  
			//if at player capacity, alert("Not accepting new players"). 

			if(players.length == 4) {
				czarPick();
			} else {
				alert("The player count it at capacity! Please wait till the next game.")
			}
	}

	// when czar choses a card...
	// 	$('.divWithPlayedCards').on('click', '.card', function() {
	// 		if(username == czar) {
	// 			awardPointCzarPick();
	// 		} else {
	// 			alert("You are not the Czar! You may not pick...");
	// 		}
	// 		//point is awarded to user who's card is selected. 
	// 	});

	// randomly pick czar

	// //this function is not done yet.  

	// function displayPlayedCards() {

	// 		if(players.length == cardsInPlay.length) {
	// 			$()//display html test of cards on screen. 
	// 		}
	// };


	// function awardPointCzarPick() {
	// 		// clickedOn = $(this).attr("src");
	// 		// clickedOnId = $(this).attr("id");
	// 		// userAwarded = **access user name here.  Same as last project?**

	// }
});