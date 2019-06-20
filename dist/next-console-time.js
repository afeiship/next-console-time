/*!
 * name: next-console-time
 * url: https://github.com/afeiship/next-console-time
 * version: 1.0.0
 * date: 2019-06-20T05:02:29.812Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var _ = nx.delete || require('next-delete');

  var NxConsoleTime = nx.declare('nx.ConsoleTime', {
    statics: {
      times: {},
      DEBUG: true,
      onlyLabel: null,
      time: function(inLabel) {
        if (!this.DEBUG) return;
        var onlyLabel = this.onlyLabel;
        var times = this.times;
        if (!onlyLabel || (onlyLabel && inLabel === onlyLabel)) {
          times[inLabel] = times[inLabel] || [];
          times[inLabel][0] = Date.now();
        }
      },
      timeEnd: function(inLabel, inIsOnly) {
        if (!this.DEBUG) return;
        var times = this.times;
        var onlyLabel = (this.onlyLabel = this.onlyLabel || (inIsOnly ? inLabel : null));
        if (onlyLabel && onlyLabel !== inLabel) return;
        times[inLabel][1] = Date.now();
        var record = times[inLabel];
        var duration = record[1] - record[0];
        var msg = '[ ⏰ ' + inLabel + ' ]: ' + duration + 'ms';
        console.log('%c ' + msg, 'color:#007aff;');

        if (onlyLabel && onlyLabel === inLabel) {
          nx.delete(this.times);
          this.times[inLabel] = record;
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxConsoleTime;
  }
})();

//# sourceMappingURL=next-console-time.js.map
