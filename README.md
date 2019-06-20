# next-console-time
> Time/timeEnd for next.

## installation
```bash
npm install -S afeiship/next-console-time --registry=https://registry.npm.taobao.org
```

## apis
| api        | params            | description                    |
| ---------- | ----------------- | ------------------------------ |
| time       | inLabel           | Set start date                 |
| timeEnd    | inLabel, inIsOnly | Set end date                   |
| self.DEBUG | true/false        | If open/close the debug option |

## usage
```js
import NxConsoleTime from 'next-console-time';

NxConsoleTime.time('test');
const str = '';
for (let i = 0; i < 1000000; i++) {
  str = str + i;
}
NxConsoleTime.timeEnd('test');


// Use only option:
NxConsoleTime.time('test');
const str = '';
for (let i = 0; i < 1000000; i++) {
  str = str + i;
}
NxConsoleTime.timeEnd('test', true);

// pretty output:
// [ ⏰ changeIndexTab ]: 1524ms
```
