//PArt one, refactor

let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

let lines = csvStr.split(`\n`);
let cells = csvStr.split(`,`);
let arrTwoD = [];

for(let i = 0; i < lines.length; i++){
  let row = lines[i].split(`,`);
  arrTwoD.push(row);
}

console.log(arrTwoD);


