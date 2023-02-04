$(document).ready(function(){
    $(".accordion-titel").click(function(){
    $(this).parent(".accordion-item").find(".accordion-contant").slideToggle();
    $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
    $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
    });
});