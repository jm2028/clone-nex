/* game tab 버튼 */
$(function () {
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

    $('.js_btn_gnb_open').on('click', function () {
        $('header').addClass('open');
    });

    $('.gnb_dimmed').on('click', function () {
        $('header').removeClass('open');
    })
    $('.js_btn_gnb_close').on('click', function () {
        $('header').removeClass('open');
    })
});