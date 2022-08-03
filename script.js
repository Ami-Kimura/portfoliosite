// Smooth Scrool

$(function() {

  $('a[href^="#"]').click(function() {

    // 初期設定：移動時間(ms)と頭出し位置
    var speed = 1500;
    var offset = -70;

    // アンカーを取得
    var anchor = $(this).attr("href");

    // ターゲットの位置を取得
    var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
    var position = target.offset().top + offset;

    // スクロール（アニメーション）
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');

    return false;

  });

});

$('.dummy').click(function() {
  return false;

});
