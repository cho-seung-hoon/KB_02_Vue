const fs = require('fs');

if (fs.existsSync('./test2/test3/test4')) {
  console.log('이미 폴더 존재합니다.');
} else {
  fs.mkdir('./test2/test3/test4', { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });
}
