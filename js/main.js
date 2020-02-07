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






// 메뉴리스트 클릭했을때 서브메뉴 나오게하기
var submenu_tab = $('.submenu-tab');
var submenu_tabpanel = $('.submenu-tabpanel');

submenu_tab.on('click keyup', function(e) {
  e.preventDefault();

  if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
      submenu_tabpanel.removeClass('submenu-act');
      $(this).closest('.submenu-tab').next().addClass('submenu-act');
  }
});


// 클로즈 버튼 눌렀을때 서브메뉴 사라지게 하기
var close_btn = $('.menu-sub-close-btn');

close_btn.on('click keyup', function(e) {
  e.preventDefault();

  if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
      // submenu_tabpanel.removeClass('submenu-act');
      $(this).closest('.submenu-tabpanel').removeClass('submenu-act');
  }
});