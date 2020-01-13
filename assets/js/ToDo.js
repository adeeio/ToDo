'use-strict';

$("li").on("click", "p", (e) => {
    let element = $(e.target);
    element.toggleClass( "checked", 100);
    e.stopPropagation();
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

