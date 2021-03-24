/* game tab 버튼 */
$(function () {
    /* nav open */
    $('.js_btn_gnb_open').on('click', function () {
        $('header').addClass('open');
    });
    /* nav submenu 변경 */
    $('.js_btn_pcgame').on('click', function () {
        $('.js_btn_mogame').removeClass('on');
        $('.js_btn_pcgame').addClass('on');
        $('.gnb_mogame_wrap').removeClass('on');
        $('.gnb_pcgame_wrap').addClass('on');
    });
    $('.js_btn_mogame').on('click', function () {
        $('.js_btn_pcgame').removeClass('on');
        $('.js_btn_mogame').addClass('on');
        $('.gnb_pcgame_wrap').removeClass('on');
        $('.gnb_mogame_wrap').addClass('on');
    });
    /* dimmed 클릭시 menu 닫힘 */
    $('.gnb_dimmed').on('click', function () {
        $('header').removeClass('open');
    });
    $('.js_btn_gnb_close').on('click', function () {
        $('header').removeClass('open');
    });

    /* view type */
    $('.js_btn_thumbnail').on('click',function () {
        $('.game_wrap').removeClass('type_list').addClass('type_thumbnail');
    });
    $('.js_btn_list').on('click',function () {
        $('.game_wrap').removeClass('type_thumbnail').addClass('type_list');
    });

    /* game filter */
    $('.js_btn_allgame').on('click', function () {
        gameFilter(this);
        $('.filter_all').addClass('on');
    });
    $('.js_btn_mmorpg').on('click', function() {
        gameFilter(this);
        $('.filter_mmorpg').addClass('on');
    });
    $('.js_btn_action').on('click', function() {
        gameFilter(this);
        $('.filter_action').addClass('on');
    });
    $('.js_btn_fps').on('click', function() {
        gameFilter(this);
        $('.filter_fps').addClass('on');
    });
    $('.js_btn_casual').on('click', function() {
        gameFilter(this);
        $('.filter_casual').addClass('on');
    })

    var gameFilter = function(t) {
        $('.filter_item').removeClass('on');
        $(t).parent().addClass('on');
        $('.filter_all').removeClass('on');
    }
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dotsContainer: '.owl-dots',
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true
    });
});