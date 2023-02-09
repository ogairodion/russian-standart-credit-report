import $ from 'jquery';

$('.status__item-top').on('click', function() {
    $('.dropdown-content', $(this).parent()).toggleClass('close');
});

$('input[type="file"]').on('change', function() {
    $('.form__input-file--info', $(this).parent()).text($(this).get(0).files[0].name);
});