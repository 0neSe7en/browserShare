$(document).ready(function() {
  console.log('Ready!');
  $('body *').each(function(index, ele) {
    if ($(ele).children().length === 0) {
      $(ele).mousemove(function(e) {
        $(ele).text('(x, y) = (' + e.pageX + ', ' + e.pageY + ')');
      });
    }
  });
});