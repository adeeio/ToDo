'use-strict';

$("li").on("click", "p", (e) => {
    let element = $(e.target);
    element.toggleClass( "checked", 100);
    e.stopPropagation();
});

$("span").on("click", (e) => {
    let element = $(e.target);
    element.parent().fadeToggle(400, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

