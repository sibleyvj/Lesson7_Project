/**
Program Name: Recipe Display Application 

Author: Vincent Sibley

Date: 7/17/15

Filename: extracredit.js
*/

function display(event){
   
    $(event.currentTarget).next().fadeIn("slow");

}//end of display()

 $(".ingr").text("Vincent Sibley");


function display2(event) {

    
 $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}

$("h3").click(display2);
$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "green");
});
$(".instr").css("color", "red").slideUp(2000).slideDown(2000);
$(".ingr").css("color", "blue").slideUp(2000).slideDown(2000);