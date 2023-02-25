$(document).ready(function() {
  $('h1.header-title:contains("Homepage")').each(function() {
    var anchorId = $(this).attr('nav-1');
    $('#' + anchorId).css('border-bottom', '2px solid #333');
  });
  $('h1.header-title:contains("Portfolio")').each(function() {
    var anchorId = $(this).attr('nav-2');
    $('#' + anchorId).css('border-bottom', '2px solid #333');
  });
  $('h1.header-title:contains("Info")').each(function() {
    var anchorId = $(this).attr('nav-3');
    $('#' + anchorId).css('border-bottom', '2px solid #333');
  });
});
