var menu = $('.quick-booking');
var items = $('.airline-ticket');

items.on('click keyup focus', function(e) {
    e.preventDefault();
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
        items.removeClass('on');
        $(this).addClass('on');
    }
});