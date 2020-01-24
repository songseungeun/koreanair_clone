var menu = $('.quick-booking');
var items = $('.booking-tab');

items.on('click keyup focus', function(e) {
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
        items.removeClass('on');
        $(this).addClass('on');
    }
});