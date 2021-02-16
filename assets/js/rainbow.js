var RANDOM_INTENSITY = 24;
var DURATION = 41.667;
function footer_rainbow() {
  var footer_spans = document.querySelectorAll("header span");
  var footer_spans_color = Array.from(
    new Array(footer_spans.length),
    function () {
      return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
      };
    }
  );
  var lastTimestamp = null;
  function rainbow_step(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;

    if (timestamp - lastTimestamp < DURATION) {
      return window.requestAnimationFrame(rainbow_step);
    }

    var d_color = {
      r: Math.floor((Math.random() - 0.7) * RANDOM_INTENSITY),
      g: Math.floor((Math.random() - 0.7) * RANDOM_INTENSITY),
      b: Math.floor((Math.random() - 0.7) * RANDOM_INTENSITY),
    };

    var offset_color = {
      r:
        (footer_spans_color[footer_spans_color.length - 1].r + d_color.r) % 256,
      g:
        (footer_spans_color[footer_spans_color.length - 1].g + d_color.g) % 256,
      b:
        (footer_spans_color[footer_spans_color.length - 1].b + d_color.b) % 256,
    };

    if (offset_color.r < 0) offset_color.r = offset_color.r + 256;
    if (offset_color.g < 0) offset_color.g = offset_color.g + 256;
    if (offset_color.b < 0) offset_color.b = offset_color.b + 256;

    footer_spans_color.unshift(offset_color);
    footer_spans_color = footer_spans_color.slice(0, footer_spans.length);
    footer_spans.forEach(function (spanEle, idx) {
      spanEle.setAttribute(
        "style",
        "color: rgba(" +
          footer_spans_color[idx].r +
          "," +
          footer_spans_color[idx].g +
          "," +
          footer_spans_color[idx].b +
          ",0.8)"
      );
    });
    window.requestAnimationFrame(rainbow_step);
    lastTimestamp = timestamp;
  }
  window.requestAnimationFrame(rainbow_step);
}
footer_rainbow();
hljs.initHighlightingOnLoad();
moment.locale("ko");

document.querySelectorAll("main span.date").forEach(function (datetimeEl) {
  moment.locale("ko");
  moment.updateLocale("ko", {
    weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
    weekdaysMin: ["일", "월", "화", "수", "목", "금", "토"],
  });
  const dateText = datetimeEl.innerText;
  datetimeEl.innerText = moment(dateText).format("YYYY년 MM월 DD일 dd요일");
});
