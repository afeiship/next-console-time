(function() {
  var nx = require('next-js-core2');
  var NxConsoleTime = require('../src/next-console-time');

  describe('NxConsoleTime.methods', function() {
    beforeEach(() => {
      NxConsoleTime.DEBUG = true;
      NxConsoleTime.times = {};
    });
    test('Has value when flag not set,', function() {
      var times = NxConsoleTime.times;
      NxConsoleTime.time('test');
      var str = '';
      for (var i = 0; i < 100000; i++) {
        str = str + i;
      }
      NxConsoleTime.timeEnd('test');
      expect(NxConsoleTime.DEBUG).toBe(true);
      expect(times).not.toEqual({});
      expect(times.test.length).toBe(2);
    });

    test('Has value when flag set to false', function() {
      // set to false(close the debug)
      NxConsoleTime.DEBUG = false;

      var times = NxConsoleTime.times;
      NxConsoleTime.time('test2');
      var str = 'AAAA';
      for (var i = 0; i < 200000; i++) {
        str = str + i;
      }
      NxConsoleTime.timeEnd('test2');
      expect(times).toEqual({});
      expect(times.test2).toBeUndefined();
    });

    test('when only option set to true', function() {
      var times = NxConsoleTime.times;
      NxConsoleTime.time('tt1');
      var str = 'AAAA';
      for (var i = 0; i < 20000; i++) {
        str = str + i;
      }
      NxConsoleTime.timeEnd('tt1');

      NxConsoleTime.time('tt2');
      var str = 'AAAA';
      for (var i = 0; i < 20000; i++) {
        str = str + i;
      }
      NxConsoleTime.timeEnd('tt2', true);

      // The thrid times;
      NxConsoleTime.time('tt3');
      var str = 'AAAA';
      for (var i = 0; i < 20000; i++) {
        str = str + i;
      }
      NxConsoleTime.timeEnd('tt3', true);

      expect(Object.keys(times)).toEqual(['tt2']);
    });
  });
})();
