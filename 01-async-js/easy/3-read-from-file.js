const fs = require('fs');
const path = require('path');

fs.readFile(path.join(path.dirname(__filename), '1-counter.js'), { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(data);
});
let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
