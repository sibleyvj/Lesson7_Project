/**
Program Name: Recipe Display Application 

Author: Vincent Sibley

Date: 7/17/15

Filename: script.js
*/

function display(event){

    $(event.currentTarget).next().fadeIn("slow");

}//end of display()

$("h3").click(display);

function display2(event) {

   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}