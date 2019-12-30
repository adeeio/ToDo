"use strict"

const plus = $("#plus");
const input = $("input");
const output = $(".output");

plus.on('click', () => {
    input.toggleClass("visible");
});

const inputValue = input.val();

input.keypress( (e, inputValue) => {
    if(e.which == 13){
        output.append(inputValue);
    }
    
});