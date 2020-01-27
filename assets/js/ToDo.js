'use-strict';

$("#input").on("keypress", (e) => {
    input.value = input.value.replace(/[^\w\s]/gi, "");
    if(e.which === 13 && $("#input").val()){
        $("ul").append("<li><span id='trash'><i class='far fa-trash-alt'></i></span><p>" + 
        $("#input").val() + "</p></li>");
        $("#input").val("");
    }
});

$("#container").on("click", "li", "p", (e) => {
    let element = $(e.target);
    element.toggleClass( "checked", 100);
    e.stopPropagation();
});



$("#container").on("click","span", "i", (e) => {
    let element = $(e.target);
    element.parent().parent().fadeToggle(400, function () {
        $(this).remove();
    });
    
});

$("#plus").on("click", (e) => {
    $("#input").toggleClass("visibility");
    e.stopPropagation();
});



