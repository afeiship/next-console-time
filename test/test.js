(function() {
  var nx = require('next-js-core2');
  var NxConsoleTime = require('../src/next-console-time');

  describe('NxConsoleTime.methods', function() {
    test('init', function() {
      NxConsoleTime.time('test');
      var str = '';
      for (var i = 0; i < 1000000; i++) {
        str = str + i;
      }
      NxConsoleTime.timeEnd('test');
    });
  });
})();
