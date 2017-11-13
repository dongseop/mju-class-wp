$(function() {
  var template = _.template($('#template').html());
  var name = prompt('닉네임을 입력해주세요. 영어/숫자로만');
  var socket = io({
    upgrade: false,
    transports: ['websocket']
  });
  $('#name').val(name);
  socket.emit('join', name);
  socket.on('chat', function(data) {
    data.type = (data.from === name)? 'mine' : 'others';
    $('#messages').append(template(data));
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

  socket.on('dm', function(data) {
    data.type = 'direct';
    $('#messages').append(template(data));
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
  
  socket.on('join', function(name) {
    if (name) {
      $('#messages').append("<li><span class='text'>" + name + "님이 접속하셨습니다.</span></li>");
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }
  });

  socket.on('left', function(name) {
    if (name) {
      $('#messages').append("<li><span class='text'>" + name + "님이 나갔습니다.</span></li>");
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    }
  });

  $('form').submit(function() {
    socket.emit('chat', {from: name, message: $('#m').val()});
    $('#m').val('').focus();
    return false;
  });
  $('#m').focus();
});
