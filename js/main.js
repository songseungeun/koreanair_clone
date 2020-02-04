let menu = $('.quick-booking');
let items = $('.airline-tab, .hotel-tab, .rentacar-tab');

items.on('click keyup', function(e) {
    e.preventDefault();
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) ) {
        items.removeClass('on');
        $(this).addClass('on');
        $(this).attr('tabindex', 0).siblings().attr('tabindex', -1);
    }
});


let tabs = $('.quick-booking-tab [role="tab"]')

tabs.on('click keyup', function (e) {
    // e.preventDefault();
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) ) {
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
    let selectedId = "#"+$(this).attr('aria-controls');
    $(selectedId).addClass('detail-view').siblings().removeClass('detail-view');
    $(selectedId).attr('tabindex', 0).siblings().attr('tabindex', -1);
    }
    
});



var button = $('.btn');

button.on('click keyup', function(e) {
  if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) ) {
    e.preventDefault();
      $(this).closest('.btn-grp').children('.btn-on').removeClass('btn-on');
      $(this).addClass('btn-on');
      // $(this).addClass('btn-on').siblings().removeClass('btn-on');
  }
});



var booking_detail_menu = $('.airline-ticket, .airline-checkin,.airline-schedule');
    
booking_detail_menu.on('click keyup focus', function(e) {
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
        // e.preventDefault();
        booking_detail_menu.removeClass('menu-act');
        $(this).addClass('menu-act');
    }
});