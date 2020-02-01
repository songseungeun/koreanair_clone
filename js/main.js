let menu = $('.quick-booking');
let items = $('.airline-tab, .hotel-tab, .rentacar-tab');

items.on('click keyup focus', function(e) {
    e.preventDefault();
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
        items.removeClass('on');
        $(this).addClass('on');
    }
});


let tabs = $('.quick-booking-tab [role="tab"]')

tabs.on('click', function (e) {
    e.preventDefault();
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
    let selectedId = "#"+$(this).attr('aria-controls');
    $(selectedId).addClass('detail-view').siblings().removeClass('detail-view');
})
