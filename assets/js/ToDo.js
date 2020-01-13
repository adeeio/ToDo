'use-strict';

$("#input").on("keypress", (e) => {
    input.value = input.value.replace(/[^\w\s]/gi, "");
    if(e.which === 13 && $("#input").val()){
        $("ul").append("<li><span id='trash'><i class='far fa-trash-alt'></i></span><p>" + 
        $("#input").val() + "</p></li>");
        $("#input").val("");
    }
});

$("li").on("click", "p", (e) => {
    let element = $(e.target);
    element.toggleClass( "checked", 50);
});

$("span").on("click", "i", (e) => {
    let element = $(e.target);
    element.parent().parent().fadeToggle(400, function () {
        $(this).remove();
    });
    
});

$("#plus").on("click", (e) => {
    $("#input").toggleClass("visibility");
    e.stopPropagation();
});



