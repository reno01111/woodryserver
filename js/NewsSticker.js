var slider;
var sliderFlag = false;

function sliderSet() {
    var windowWidth = window.innerWidth;
    slider = $('.slider').bxSlider({
        touchEnabled: false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
        mode: 'vertical',//縦スライド指定
        controls: false,//前後のコントロールを表示させない。
        auto: 'true',//自動的にスライド
        pager: false//ページ送り無効化
    });
}

$(window).on('load resize', function () {
    sliderSet();
});

//◆タブレット以下も1行で表示させたい場合は下記のみの記述でOK
//$('.slider').bxSlider({
//touchEnabled:false,
//mode: 'vertical',
//controls: false,
//auto: 'true',
//pager: false
//});