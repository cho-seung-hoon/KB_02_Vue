const fs = require('fs');

if (fs.existsSync('./test')) {
  console.log('이미 폴더 존재합니다.');
} else {
  fs.mkdir('./test', (err) => {
    if (err) {
      return console.error(err);
    }
  });
}
