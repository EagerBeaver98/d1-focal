let temp = process.argv.splice(2);
console.log(temp);



for (let x = 0; x < temp.length; x++) {
  let answer = '';
  for (let y = 1; y <= temp[x].length; y++) {
    answer = answer + temp[x][temp[x].length - y];
  }
  console.log(answer);
}