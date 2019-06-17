(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var times = {};

  // add debug flag
  nx.__DEBUG_CONSOLE_TIME__ = true;

  var NxConsoleTime = nx.declare('nx.ConsoleTime', {
    statics: {
      time: function(inLabel) {
        if (!nx.__DEBUG_CONSOLE_TIME__) return;
        times[inLabel] = times[inLabel] || [];
        times[inLabel].push(Date.now());
      },
      timeEnd: function(inLabel) {
        if (!nx.__DEBUG_CONSOLE_TIME__) return;
        times[inLabel].push(Date.now());
        var recored = times[inLabel];
        console.log(inLabel + ': ', recored[1] - recored[0]);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxConsoleTime;
  }
})();
