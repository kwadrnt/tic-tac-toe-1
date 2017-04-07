//sanity check
console.log('Jesus!')
// wait for the DOM to finish loading

$(document).ready(function() {
  
})

// second attempt

// $(document).ready(function() {
//   var x = "x";
//   var o = "o";
//   var turns = 0;
  
//   // box vars
//   var box1 = $('#box1');
//   var box2 = $('#box2');
//   var box3 = $('#box3');
//   var box4 = $('#box4');
//   var box5 = $('#box5');
//   var box6 = $('#box6');
//   var box7 = $('#box7');
//   var box8 = $('#box8');
//   var box9 = $('#box9');

//   $('#board').on('click', function() {
//     if(box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o') || 
//       box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o') ||
//       box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o') ||
//       box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o') ||
//       box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o') ||
//       box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o') ||
//       box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o') ||
//       box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o') 
//   ){
//         alert('Winner is O');
//         $('#board').text('');
//         $('#board').removeClass('diable');
//         $('#board').removeClass('o');
//         $('#board').removeClass('x');
//     } else if(box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x') || 
//       box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x') ||
//       box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x') ||
//       box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x') ||
//       box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x') ||
//       box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x') ||
//       box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x') ||
//       box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')
//   ){
//         alert('Winner is X');
//         $('#board').text('');
//         $('#board').removeClass('diable');
//         $('#board').removeClass('o');
//         $('#board').removeClass('x');
//   });
// });

  
 



 // 1st attempt
//   var player = 1;

//   $('.box').on('click', function(event) {

//     alert('add symbol here');
//     var boxSelected = $(this);

//     if((boxSelected).hasClass('ex') || boxSelected.hasClass('oh')) {
//       alert('This box has already been selected! Please select another.');
//     } else {
//       if(player === 1) {
//         boxSelected.addClass('ex');
//         if(checkIfPlayerWon('ex')) {
//           alert('Congrats ' + player + ' you won!')
//         }
//       } else {
//         player = 2; 
//       } else {
//         boxSelected.addClass('oh');
//         if(checkIfPlayerWon('oh')) {
//           alert('Congrat ' + player + ' you won!')
//         } else{
//           player = 1;
//         }
//       }
//     }
//   });

//   function checkIfPlayerWon(symbol) {

//       if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('sq3').hasClass(symbol)) {
//         return true;
//       } else if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq6').hasClass(symbol)) {
//         return true;
//       } else if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('sq9').hasClass(symbol)) {
//         return true;
//       }  else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('sq7').hasClass(symbol)) {
//         return true;
//       } else if($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq8').hasClass(symbol)) {
//         return true;
//       } else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('sq9').hasClass(symbol)) {
//         return true;
//       } else if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq9').hasClass(symbol)) {
//         return true;
//       } else if($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('sq7').hasClass(symbol)) {
//         return true;
//       } else {
//         return false;
//       }
//     }




// });

// //reset button code















































