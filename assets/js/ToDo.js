'use-strict';

$("#conatiner").on("click", "li", (e) => {
    console.log(this);
    $(this).css("color", "green");
    e.stopPropagation();
});