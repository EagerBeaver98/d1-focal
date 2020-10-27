let temp = process.argv.splice(2);
console.log(temp);


let answer = '';
for (let x = 0; x < temp.length; x++) {
  let temp2 = '';
  for (let y = 1; y < temp[x].length; y++) {
    temp2 += temp[x][y];
  }
  answer = answer + temp2 + temp[x][0] + "ay ";
}
console.log(answer);