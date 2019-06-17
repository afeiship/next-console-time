(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  // add debug flag
  var NxConsoleTime = nx.declare('nx.ConsoleTime', {
    statics: {
      times: {},
      DEBUG: true,
      time: function(inLabel) {
        if (!this.DEBUG) return;
        var times = this.times;
        times[inLabel] = times[inLabel] || [];
        times[inLabel].push(Date.now());
      },
      timeEnd: function(inLabel) {
        if (!this.DEBUG) return;
        var times = this.times;
        times[inLabel].push(Date.now());
        var recored = times[inLabel];
        var duration = recored[1] - recored[0];
        var msg = '[ ⏰ ' + inLabel + ' ]: ' + duration + 'ms';
        console.log('%c ' + msg, 'color:#007aff;');
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxConsoleTime;
  }
})();
