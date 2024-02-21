// Cookieが存在するか確認
if (document.cookie.indexOf('animationPlayed=true') === -1) {
    // SVGアニメーションの描画
    var stroke;
    stroke = new Vivus('mask', {
        start: 'manual',
        type: 'scenario-sync',
        duration: 10,
        forceRender: false,
        animTimingFunction: Vivus.EASE,
    },
        function () {
            $("#mask").attr("class", "done");
        });

    $(window).on('load', function () {
        // Cookieを設定（有効期限は10分）
        var now = new Date();
        var expires = new Date(now.getTime() + 10 * 60 * 1000); // 10分
        document.cookie = 'animationPlayed=true; expires=' + expires.toUTCString();

        $("#splash").delay(3000).fadeOut('slow');
        $("#splash_logo").delay(3000).fadeOut('slow');
        stroke.play();
    });
} else {
    // 既にアニメーションが再生された場合の処理
    $("#splash").hide();
    $("#splash_logo").hide();
}
