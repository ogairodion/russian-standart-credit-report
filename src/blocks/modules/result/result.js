import $ from 'jquery';

$('.result__sidebar-item').on('click', function() {
    $('.result__sidebar-item').removeClass('active');
    $(this).addClass('active');
});