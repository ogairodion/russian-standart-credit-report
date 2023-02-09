import $ from "jquery";
global.$ = global.jQuery = $;

$(window).on("load", function(){
    setTimeout(() => {
        $(".loader").fadeOut("slow");
    }, 2000);
});
