//sanity check
console.log('Jesus!')
// wait for the DOM to finish loading

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var player = 1;

    $('.box').on('click', function(event) {
      alert('add x or o here');

      var squareSelected = $(this);
    
      if (squareSelected.hasClass('ex') || squareSelected.hasClass('oh')) {
        alert('This square has already been selected, please select another.');
      } else {
        //add all rest of the logic
        if (player === 1) {
          squareSelected.addClass('ex');
          if(checkIfPlayerWon('ex')) {
            alert('Congrats! Player ' + player + ' has won!')
          } else {
          player = 2;
        }
        } else {
          squareSelected.addClass('oh');
          if(checkIfPlayerWon('oh')) {
            alert('Congrats! Player ' + player + ' has won!')
          } else {
          player = 1;
      }
}
    });

    function checkIfPlayerWon(symbol) {

      if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('sq3').hasClass(symbol)) {
        return true;
      } else if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq6').hasClass(symbol)) {
        return true;
      } else if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('sq9').hasClass(symbol)) {
        return true;
      }  else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('sq7').hasClass(symbol)) {
        return true;
      } else if($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq8').hasClass(symbol)) {
        return true;
      } else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('sq9').hasClass(symbol)) {
        return true;
      } else if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq9').hasClass(symbol)) {
        return true;
      } else if($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq7').hasClass(symbol)) {
        return true;
      } else {
        return false;
      }
    }

});  

// reset button

  