const fs = require('fs');
let rs = null;
try {
  rs = fs.createReadStream(
    '20250313_조승훈/20250313_조승훈_심화/readMe.txt',
    'utf-8'
  );
  console.log('읽기 준비 완료');
} catch (error) {
  console.log(error);
}

rs.on('data', (chunk) => {
  console.log('new chunk received:');
  console.log(chunk.length, chunk);
})
  .on('end', () => {
    console.log('finished reading data');
  })
  .on('error', (err) => {
    console.error(`Error reading the file: ${err}`);
  });
