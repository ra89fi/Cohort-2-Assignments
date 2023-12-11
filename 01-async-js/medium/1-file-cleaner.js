const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(__filename), '../easy', 'out.txt');
fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  data = data.replace(/\s+/g, ' ');
  fs.writeFile(filePath, data, { encoding: 'utf8' }, err => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('File cleaned')
  });
});
