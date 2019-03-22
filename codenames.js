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
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
};
var styles = ["blue", "red", "tan", "black", "white"];
var locations = [ "top-left", "top-right", "bottom-left", "bottom-right" ];

function makeCard(title, data) {
  if ($.isArray(data)) return makeCard(title, randomChoice(data));

  if (data.override) {
    title = data.override;
  }
  if (data.prefix) {
    title = data.prefix + " " + title;
  }
  if (data.suffix) {
    title = title + " " + data.suffix;
  }
  var base = $("<div>")
    .addClass("card")
    .addClass("white");
  $("<h2>").text(title).appendTo(base);
  if (data.subtitle) {
    $("<h3>").text(data.subtitle).appendTo(base);
  }
  $.each(locations, function(i, l) {
    if (data[l]) {
      $("<div>").text(data[l]).addClass(l).appendTo(base);
    }
  });

  return base;
};

function process(data) {
  var keys = Object.keys(data);
  while (keys.length < 20) {
    keys.push.apply(keys, keys);
  }
  var shuffled = shuffle(keys);
  var firsts = shuffled.slice(0, 20);

  $.each(firsts, function(i) {
    var key = firsts[i];
    var base = makeCard(key, data[key]);
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
