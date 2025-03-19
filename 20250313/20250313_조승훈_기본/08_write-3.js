const fs = require('fs');

if (fs.existsSync('text-1.txt')) {
  console.log('이미 파일이 존재합니다.');
} else {
  const data = fs.readFileSync(
    '20250313_조승훈/20250313_조승훈_기본/example.txt',
    'utf8'
  );
  fs.writeFileSync('./text-1.txt', data);
}
