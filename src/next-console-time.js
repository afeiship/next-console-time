(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxDelete = nx.delete || require('next-delete');

  var NxConsoleTime = nx.declare('nx.ConsoleTime', {
    statics: {
      times: {},
      DEBUG: true,
      isOnly: false,
      time: function(inLabel) {
        if (!this.DEBUG || this.isOnly) return;
        var times = this.times;
        times[inLabel] = times[inLabel] || [];
        times[inLabel][0] = Date.now();
      },
      timeEnd: function(inLabel, inIsOnly) {
        if (!this.DEBUG) return;
        var isOnly = (this.isOnly = this.isOnly || !!inIsOnly);
        var _recored = this.times[inLabel];
        var times;

        if (!_recored) return;
        if (isOnly) {
          if (_recored) {
            times = nxDelete(this.times);
            times[inLabel] = _recored;
            this.times = times;
          }
        } else {
          times = this.times;
        }

        times[inLabel][1] = Date.now();
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
