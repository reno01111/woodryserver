var stroke;
stroke = new Vivus('mask', {
    start: 'manual',
    type: 'scenario-sync',
    duration: 5, //アニメーションの時間設定。
    forceRender: false,
    animTimingFunction: Vivus.EASE,
},
    function () {
        $("#mask").attr("class", "done");
    }
);

$(window).on('load', function () {
    $("#loadingLogo").delay(3000).fadeOut('slow'); // ローディングのロゴを3秒してからフェイドアウト
    stroke.play(); //SVGアニメーションを実行

    $("#loading").delay(3000).fadeOut('slow', function () {　//ローディングエリアを3秒でフェードアウト
        $('body').addClass('appear');　//フェードアウトした後でbodyにappearクラス付与
    });
});