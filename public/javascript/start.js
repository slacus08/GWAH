$(document).ready(function() {
 
	var players = ["user1", "user2", "user3", "user4"]

	//needs to come from firebase, which comes from sql
	var cardsFromSql = ["fun1", "fun2","fun3","fun4","fun5","fun6","fun7","fun8","fun9","fun10","fun11","fun12","fun13","fun14","fun15","fun16","fun17","fun18","fun19"];

	//needs to come from firebase, which comes from sql
	var whiteCardsFromSql = ["WCfun1", "WCfun2","WCfun3","WCfun4","WCfun5","WCfun6","WCfun7","WCfun8","WCfun9","WCfun10","WCfun11","WCfun12","WCfun13","WCfun14","WCfun15","WCfun16","WCfun17","WCfun18","WCfun19"];
	
	//updates in firebase to true or false
	var czar;

	//once a user has played czar, this need to update in FIREBASE
	var czarPlayed= [];

	//
	var playerIndex;

	//the function that is associated with this needs to come from firebase. 
	var deal = [];


	// Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyDSSNV1gjwiaCVLTvKSZwgW5wNoSZ6HMOs",
	    authDomain: "gwah-199f8.firebaseapp.com",
	    databaseURL: "https://gwah-199f8.firebaseio.com",
	    projectId: "gwah-199f8",
	    storageBucket: "gwah-199f8.appspot.com",
	    messagingSenderId: "817131336094"
	  };
	  firebase.initializeApp(config);

	var database = firebase.database();




	$(document).on("click", '#start', function(event) {

	//onlick - game start. 
	//1) firebase is updated with the following information: 
	//    - white cards
	//	  - black cards
	//    - list of all users and their information (game starts when we reach 4 players)
	//    - 	czar (if set to user1, we can delete this)
	//    -     the hand they are dealt
	//    -     everyone starts with 0 points
	//2) screen should update with the correct card information depending on user (WC and BC)
	//3) 


      event.preventDefault();

    //1)
    //firebase is updated with white and black cards
      updateCardsToFirebase(cardsFromSql, whiteCardsFromSql);
    //firebase is updated with user information(user length is set to 4 to make this happen.  We will need to change it so that once 4 users are logged in, it auto starts)
      updateUserInfoToFirebase();

    //2) screen is updated with info from firebase

    //black card is played
      singleBlackCardPlayed();

    //white cards appear on screen
      dealtHandAppearsOnScreen();


	});



///////////////functions////////////////////////////////

	//I push two arrays to firebase. 
	function updateCardsToFirebase(cardsFromSql, whiteCards) {
		//temporary - pulling from my computer. 
		database.ref().update({
			"blackCards": cardsFromSql,
			"whiteCards": whiteCardsFromSql
		})
	};


	//I loop through users and deal them their cards and initial score
	function updateUserInfoToFirebase() {

		for(var i = 0; i < players.length; i++) {

	   	 database.ref().on("value", function(childSnapshot) {
			whiteCards = childSnapshot.val().whiteCards;
			   deal = [whiteCards[0], whiteCards[1], whiteCards[2], whiteCards[3], whiteCards[4], whiteCards[5]];
		});

	   	  var player = players[i];

	   	  writeUserData(player);

		};

		function writeUserData(player) {
		  database.ref(player).set({
			  	"hand": deal,
			  	"username": player, 
				"points": 0
		  });

		};
	}; 

	function singleBlackCardPlayed() {

		var indexOfCard =  Math.floor(Math.random() * (17 - 0 + 1)) + 0

		database.ref().on("value", function(childSnapshot) {
			blackCards = childSnapshot.val().blackCards[indexOfCard];
				$("#play2").html(blackCards)
		});

	};

	function dealtHandAppearsOnScreen() {
		database.ref().on("value", function(childSnapshot) {
			for(var i = 0; i < 6; i++){
				whiteCards = childSnapshot.val().whiteCards[i];
			   	$(".card" + i).html(whiteCards)
			}
		});
	}

});



      