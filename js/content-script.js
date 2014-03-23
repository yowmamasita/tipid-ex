var EXTENSION_ID = chrome.i18n.getMessage('@@extension_id');

function pager() {
  page = $('.pager tbody tr td');
  prev = page.find('input[value="Prev"]');
  next = page.find('input[value="Next"]');
  prev.each(function() {
    if(!$(this).is(':disabled')) {
      var link = /^document\.location\.href\=\'(.*)\'/.exec($(this).attr('onclick'))[1];
      var new_el = $('<a/>').prop('href', link)
                            .text('Prev');
      $(this).replaceWith(new_el);
    }
    else {
      $(this).remove();
    }
  });
  next.each(function() {
    if(!$(this).is(':disabled')) {
      var link = /^document\.location\.href\=\'(.*)\'/.exec($(this).attr('onclick'))[1];
      var new_el = $('<a/>').prop('href', link)
                            .text('Next');
      $(this).replaceWith(new_el);
    }
    else {
      $(this).remove();
    }
  });
  //.replaceWith()
}

$(function() {
  pager();
});
