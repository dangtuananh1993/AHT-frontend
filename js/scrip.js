$(document).ready(function () {
    $('.navigation-icon').click(function (e) { 
        e.preventDefault();
        $('.nav-bar').addClass('active');
        $('.cover').addClass('active');
    });
});
$(document).ready(function () {
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.nav-bar').removeClass('active');
        $('.cover').removeClass('active');
    });
});


// $('.nav-icon').click(function (e) { 
//     e.preventDefault();
//     $('.navbar').removeClass('active');
//     $('.cover').addClass('active');
// });