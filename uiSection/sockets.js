var socket = io.connect('http://localhost:8000');
  socket.on('cursorChange', function (data) {
    moveAndOver(data.x, data.y)
  });