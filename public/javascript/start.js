$(document).ready(function() {

	var user;

	//needs to come from firebase, which comes from sql
	var cardsFromSql = ["fun1", "fun2","fun3","fun4","fun5","fun6","fun7","fun8","fun9","fun10","fun11","fun12","fun13","fun14","fun15","fun16","fun17","fun18","fun19"];

	//needs to come from firebase, which comes from sql
	var whiteCardsFromSql = ["WCfun1", "WCfun2","WCfun3","WCfun4","WCfun5","WCfun6","WCfun7","WCfun8","WCfun9","WCfun10","WCfun11","WCfun12","WCfun13","WCfun14","WCfun15","WCfun16","WCfun17","WCfun18","WCfun19"];

	//
	var playerIndex;

	var hand = [];

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
	    var usersCount;
	    console.log(data);

	    // users = data.users;
	    //
	    // if (data && data.users) {
	    //     usersCount = data.users.length;
	    //     $('playerCount').text(usersCount);
	    // }
	  });

  var idCount = 0;

  /////on-clicks

	//registers the user in the database

  	$('#register-user').click(function() {
	  	user = $('#username-input').val();

	    database.ref($('#username-input').val()).set({
	        // "username": $('#username-input').val(),
	        "hand": 0, 
	        "points": 0
	    });

	    database.ref("count").update({
	    	"idCount": idCount + 1
	    });

	    database.ref().on("value", function(childSnapshot) {
			console.log(idCount = childSnapshot.val().idCount);
		});

	    updateCardsToFirebase(cardsFromSql, whiteCardsFromSql)

	    database.ref().on("value", function(childSnapshot) {
			whiteCards = childSnapshot.val().whiteCards;
			hand = [whiteCards[0], whiteCards[1], whiteCards[2], whiteCards[3], whiteCards[4], whiteCards[5]];
		});

		push8CardsFromLocal();

	    // idCount++;

		$("#user-count").html("Number Of Users: " + idCount);


	  });

    $('.band').on('click', 'p', function() {
			//grabs the selected card and displays it on the screen; Needs more functionality. 
        cardSelected = $(this).html();
        updateCardsWithSelected(cardSelected);
	});

  	//this deals cards to the screen

  	$('#deal-user').click(function() {
  		dealtHandAppearsOnScreen();
	});


///

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

	function push8CardsFromLocal() {
		database.ref().on("value", function(childSnapshot) {
			database.ref().child(user).update({"hand": hand});
		});
	}


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
				whiteCards = childSnapshot.val().user.hand[i];
			   	$(".card" + i).html(whiteCards)
			}
		});
	}

	function updateCardsWithSelected(cardSelected) {
	$('.item-1').html("<div class='tumb'></div> <article> <p class = 'card0'>" + cardSelected + "</p> </article> </a>")
	}

});


