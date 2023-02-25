$(document).ready(function() {
  $('h1.header-title:contains("Homepage")').each(function() {
    var anchorId = $(this).attr('nav-1');
    $('#' + anchorId).css('border-bottom', '2px solid #333');
  });
});
$().ready(function() {
   $("#nav-1").html("Text added by jQuery code.");
});
