function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
};
var styles = ["blue", "red", "tan", "black", "white"];
function process(data) {
  var shuffled = shuffle(data);
  var firsts = shuffled.slice(0, 20);
  $.each(firsts, function(d) {
    var item = data[d];
    var base = $("<div>")
      .addClass("card")
      .addClass("white");
    $("<h2>").text(item.title).appendTo(base);
    $("<h3>").text(item.subtitle).appendTo(base);
    base.appendTo("body");
  });
  $(".card").click(function() {
    var index = 4;
    for (i = 0; i < styles.length; i++) {
      if ($(this).hasClass(styles[i])) {
        $(this).removeClass(styles[i]);
        index = i;
        break;
      }
    }
    index = (index + 1) % 5;
    $(this).addClass(styles[index]);
  });
};
$(function() {
  $.get(window.location.search.replace("?", ""), "", function(data) {
    process(data);
  });
});
