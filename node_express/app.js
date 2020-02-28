const fs = require('fs');

const userName = "Nuri";

fs.writeFile('user-data.txt', 'Name:' + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('WROTE FILE');
})