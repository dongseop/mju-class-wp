$(function() {
  $('#q').keyup(function() {
    var query = $('#q').val() || "";
    query = query.trim();
    if (!query) {
      return; // typing한 내용이 없으면 종료
    }

    // spinner를 돌리자..
    $('.form').addClass('loading');

    $.ajax({
      url: '/suggest',
      data: {q: query},
      success: function(data) {
        // Ajax의 결과를 잘 받았을 때..
        var els = _.map(data, function(name) {
          return '<li>' + name + '</li>';
        });
        $('.suggest-box').html(els.join('\n')).show();
        $('.suggest-box li').click(function(e) {
          $('#q').val($(e.currentTarget).text())
          $('.suggest-box').hide();
        });
      },
      complete: function() {
        $('.form').removeClass('loading');  // spinner를 정지
      }
    });
  });
});
