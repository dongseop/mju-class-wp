$(function($){
  $('.tab > ul > li > a').click(function(e) {
    var $item = $(e.currentTarget).parent();
    var idx = $item.index() + 1;
    var $tab = $item.closest(".tab");
    $tab.find(">ul>li").removeClass('active');
    $tab.find(".section").removeClass('selected');
    $item.addClass('active');
    $tab.find(".section:nth-child(" + idx + ")").addClass("selected");
  });
  $(".tab").find(">ul>li>a:first").click();
});
