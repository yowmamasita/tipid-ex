var EXTENSION_ID = chrome.i18n.getMessage('@@extension_id');

function pager() {
  page = $('.pager tbody tr td');

  //prev & next
  page.replaceNav();

  //forum jump

  //go
  page.removeGo();

  //start a topic
  page.replaceStart();
}

jQuery.fn.replaceNav = function() {
  var prev = $(this).find('input[value="Prev"]');
  var next = $(this).find('input[value="Next"]');

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
};

jQuery.fn.replaceStart = function() {
  var start = $(this).find('input[value="Start a Topic"]');

  if (start.length) {
    var forum = get_param('sec');
    start.each(function() {
      var new_el = $('<a/>').prop('href', 'newtopic.php?sec='+forum)
                            .text('Start a Topic');
      $(this).replaceWith(new_el);
    });
  }
};

jQuery.fn.removeGo = function() {
  var go = $(this).find('input[value="Go"]');

  if (go.length) {
    go.each(function() {
      $(this).remove();
    });
  }
};

$(function() {
  pager();
});


//Utility

//from http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
function get_param(sParam)
{
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}
