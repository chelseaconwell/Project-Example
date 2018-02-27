var visibleText = "Show Less"
var hiddenText = "Show More"
$(document).ready(function () {
    alert("hello");
    $(".info-box button").click(function () {
        $(this).toggleClass("visible");
        if ($(this).hasClass("visible")) {
            $(this).html(hiddenText);
        }
        else {
            $(this).html(visibleText);
        }
        $(this).next().toggleClass("visible");
    });
})