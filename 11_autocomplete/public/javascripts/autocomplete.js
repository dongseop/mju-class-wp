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
        // Ajax의 결과를 잘 받았을 때
        // 화면에 받은 결과를 가지고 list를 rendering하고..
        var els = _.map(data, function(name) {
          return '<li>' + name + '</li>';
        });
        $('.suggest-box').html(els.join('\n')).show();

        // li item을 클릭했을 때, text box의 내용을 바꾸고, suggest-box감춤
        $('.suggest-box li').click(function(e) {
          $('#q').val($(e.currentTarget).text());
          $('.suggest-box').hide();
        });
      },
      complete: function() {
        $('.form').removeClass('loading');  // spinner를 정지
      }
    });
  });
});
