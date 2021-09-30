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
// =========================== Tab Product ======================
$(document).ready(function () {
    $('.product-bar-name').click(function (e) { 
        e.preventDefault();
        var _id = $(this).attr('href');
        $('.product-bar-name').removeClass('active');
        $('.product-row').removeClass('active');
        $(_id).addClass('active');
        $(this).addClass('active');
    });
});


// $('.nav-icon').click(function (e) { 
//     e.preventDefault();
//     $('.navbar').removeClass('active');
//     $('.cover').addClass('active');
// });