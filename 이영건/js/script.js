//gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        var gnbindex = $('.gnb > li > a').index($(this));
        $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');
    });
    $('header').on('mouseleave', function(){
        $('.gnb .inner').removeClass('on');
    });

});

//fixheader

var scrollFix = 0;
scrollFix = $(document).scrollTop();
fixHeader();

//윈도우 창 조절 시 이벤트
$(window).on('scroll resize', function(){
    scrollFix = $(document).scrollTop();
    fixHeader(); 
});

// 고정헤더함수 => fixheader();
function fixHeader() {
    if(scrollFix > 150){
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}