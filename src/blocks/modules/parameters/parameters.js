import $ from 'jquery';

$('.form__checkbox-parameters input').on('change', function() {
    let parent = $(this).closest('.form__checkbox-list');
    let list = $('.form__checkbox-items', $(parent));

    if ($(this).is(':checked')) {
        list.removeClass('hidden');
    } else {
        list.addClass('hidden');
    }
});