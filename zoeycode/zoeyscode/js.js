// JavaScript Document

    
$(document).ready(function () {
$("#button").click(function () {
$('#title').addClass('hide');
});

$('#remove').click(function () {
$('#title').removeClass('red');
})
$( "#a" ).click(function() {
  alert( "Handler for .click() called." );
});
setTimeout(function () {
$('#title').addClass('red');
}, 2000);

})
