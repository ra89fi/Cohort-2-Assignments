const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(path.dirname(__filename), 'out.txt'), 'This is to write.', { encoding: 'utf8' }, err => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('File written');
});
