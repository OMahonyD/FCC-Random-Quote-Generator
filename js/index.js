//Function that returns the JSON API call
var getURL = function() {
  return "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

}

//Function dealing with initial AJAX Request
var newQuote = function() {
    $.getJSON(getURL(), function(data) {
      var quote = data.quoteText;
      var author = "--  " + data.quoteAuthor +" --";
      $('.message').html(quote + " " + "<br/>" + author);
      $('.twitter-share-button').attr('href', "https://twitter.com/intent/tweet?hashtags=quotes&text=" + quote + " [" + author + "]");
    }); //end getJSON function
  } //end newQuote function

//Function dealing with button press
var buttonPress = function() {
    //When the element with id "getQuote" is clicked
    $('#getQuote').on('click', function() {
      
      //call the newQuote function
     
      newQuote();
      
    }); //end on 'click'
  } //end buttonPress function

var animateQuote = function(){
  $('#getQuote').click(function(){
    $('.well').animate({
      opacity: 0.25
    })
  });
}


//When ready
$(document).ready(function() {
  //load newQuote function
  newQuote();
  //load buttonPress function
  buttonPress();
}); //end document ready
