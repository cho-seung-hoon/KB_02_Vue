const path = require('path');

let data = path.join('some', 'work', 'ex.txt');
console.log(data);
console.log('파일 절대 경로 : ' + __filename);
console.log('경로만 : ' + path.dirname(__filename));
console.log('파일 이름 : ' + path.basename(__filename));
console.log('파일 이름(확장자 제외) : ' + path.basename(__filename, '.js'));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
