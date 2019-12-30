"use strict"

const plus = $("#plus");
const input = $("#input");
const output = $(".output");


plus.on('click', () => {
    input.toggleClass("visible");
});



input.keypress( (e) => {
    if(e.which == 13){
        output.append("<p>" + input.val() + "</p>");
        input.val("");
    }   
});