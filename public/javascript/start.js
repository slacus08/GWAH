$(document).ready(function() {

	var user = "";

	//needs to come from firebase, which comes from sql
	var cardsFromSql = ["fun1", "fun2","fun3","fun4","fun5","fun6","fun7","fun8","fun9","fun10","fun11","fun12","fun13","fun14","fun15","fun16","fun17","fun18","fun19"];

	//needs to come from firebase, which comes from sql
	var whiteCardsFromSql = ["WCfun1", "WCfun2","WCfun3","WCfun4","WCfun5","WCfun6","WCfun7","WCfun8","WCfun9","WCfun10","WCfun11","WCfun12","WCfun13","WCfun14","WCfun15","WCfun16","WCfun17","WCfun18","WCfun19"];

	//
	var playerIndex;

	var hand = [];

	var czar = false;

	//the function that is associated with this needs to come from firebase.

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

	database.ref().on("value", function(childSnapshot) {
	    var data = childSnapshot.val();
		var databaseData = [data];
		console.log(databaseData)
	});

	var idCount = 0;

	database.ref('count').on("value", function(snapshot) {
	  if (snapshot.exists()) {
		idCount = snapshot.val().idCount;
		$("#user-count").html("Number Of Users: " + idCount)
	  } 
	});

	$("#user-count").html("Number Of Users: " + idCount)


	//registers the user in the database

  	$('#register-user').click(function() {

  		if(!user) {

	  		//the first person who logs in becomes czar.

		    //I pull the new count from firebase(we should consider changing this to a child added so it's always updating)

			//I add 1 to the new count.

		    //I set the user name
		  	user = $('#username-input').val();

		  	if(idCount >= 1) {

		  		database.ref($('#username-input').val()).set({
		     // "username": $('#username-input').val(),
			        "hand": 0,
			        "selected": 0, 
			        "points": 0, 
			        "czar": false
			    });

			} else {

				database.ref($('#username-input').val()).set({
			        "czarCardPlayed": 0, 
			        "czarSelected": 0,
			        "czar": true
			    });

			    czar = true;
			};

			database.ref("count").update({
		    	"idCount": idCount + 1
		    });

		    updateCardsToFirebase(cardsFromSql, whiteCardsFromSql)

		    database.ref().once("value", function(childSnapshot) {
				whiteCards = childSnapshot.val().whiteCards;
				hand = [whiteCards[0], whiteCards[1], whiteCards[2], whiteCards[3], whiteCards[4], whiteCards[5]];
			});

			push6CardsFromLocal(hand);

		} else {
		  	alert("you have already joined the game");
		}
  	});

    $('.band').on('click', 'p', function() {
        cardSelected = $(this).html();
        updateCardsWithSelected(cardSelected);
	});

  	//this deals cards to the screen

  	$('#deal-user').click(function() {
  		dealtHandAppearsOnScreen();
	});


  	$('#start').click(function() {

 //  	database.ref('count').on("value", function(snapshot) {
	//   if (snapshot.exists()) {
	// 	idCount = snapshot.val().idCount;
	// 	$("#user-count").html("Number Of Users: " + idCount)
	//   } 
	// });

  		if(idCount >= 4 && czar == true){
  			alert("The game has started!")
  			singleBlackCardPlayed();
  		} else if (idCount >= 4  || idCount < 4 && czar == false) {
  			alert("Only the czar may draw a card!");
  		} else if (idCount < 4 && czar == true) {
  			alert("Please wait for the right number of players!")
  		}
	});

	// $(document).on("click", '#start', function(event) {

	// });



///////////////functions////////////////////////////////

	//I push two arrays to firebase.
	function updateCardsToFirebase(cardsFromSql, whiteCards) {
		//temporary - pulling from my computer.
		database.ref().update({
			"blackCards": cardsFromSql,
			"whiteCards": whiteCardsFromSql
		})
	};

	function push6CardsFromLocal(hand) {
		if(czar == false) {
			database.ref().once("value", function(childSnapshot) {
				database.ref().child(user).update({"hand": hand});
			});
		};
	}


	function singleBlackCardPlayed() {

		var indexOfCard =  Math.floor(Math.random() * (17 - 0 + 1)) + 0

		database.ref().once("value", function(childSnapshot) {
			blackCard = childSnapshot.val().blackCards[indexOfCard];
			$("#play2").html(blackCard)
			database.ref().child(user).update({"czarCardPlayed": blackCard});
		});

	};

	function dealtHandAppearsOnScreen() {
		for(var i = 0; i < 6; i++) {
			$(".card" + i).html(hand[i]);
		}
	};

	function updateCardsWithSelected(cardSelected) {
		//first, determine if the user is czar.
		// if(czar == true) {
			//award point - display on screen - 
		// } else { 

			if(hand.length === 6)  {
				$('.item-1').html("<div class='tumb'></div> <article> <p class = 'card0'>" + cardSelected + "</p> </article> </a>");
				var index = hand.indexOf(cardSelected);
				hand.splice(index, 1);
				console.log(hand);
				push6CardsFromLocal(hand);	
			} else {
				alert("You have already dealt your card! You need to wait...");
			}
			//if not czar, update the screen with the selected card if the user has not played their card!
			//ne
		// }
	};

});


