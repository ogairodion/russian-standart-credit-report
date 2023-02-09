import $ from 'jquery';

$('.filters__top').on('click', function() {
    $('.filters__content', $(this).parent()).toggleClass('close');
});