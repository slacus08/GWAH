//users page will show in document the 6 cards to choose from
//Query text column from white cards table
//connection query/error
//loop through pulling up to 6 cards and place in <div>

function dealUsersCards(){
  var query = "SELECT text from white_cards";
  connection.query(query, function(err, res) {
    for (var i=0; i<6; i++) {
      $(document).ready(function() {
        $("<div></div>").html(query);
      });
    };
  });
};
//Need to figure out how to select RANDOM cards and not repeat
//How do we get the different cards on different users screens
