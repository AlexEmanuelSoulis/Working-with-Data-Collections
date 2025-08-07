let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

let lines = csvStr.split(`\n`);
let arrTwoD = [];

for (let i = 0; i < lines.length; i++) {
  let row = lines[i].split(`,`);
  arrTwoD.push(row);
}

console.log(arrTwoD);

let numOfLines_W_header = arrTwoD.length - 1;
console.log(`There are ${numOfLines_W_header} rows of data.`);

let arrHeader = arrTwoD[0];
let headerLowerCase = [];
let objData = [] ;
let objectTemp = {};

for (let inc = 0; inc < arrHeader.length; inc++) {
  headerLowerCase.push(arrHeader[inc].toLowerCase());
}

for (let l = 1; l < arrTwoD.length; l++) {
  objectTemp = {};
  for (let inc = 0; inc < arrHeader.length; inc++) {
    objectTemp[headerLowerCase[inc]] = arrTwoD[l][inc];
  }
  objData.push(objectTemp);
}

let arrObj = {
  header: headerLowerCase,
  data: objData
};



let lastElement = arrObj.data.pop();
console.log(lastElement);

arrObj.data[1] = {
    id:"48",
    name:"Barry",
    occupation:"Runner",
    age:25
};

arrObj.data.push( {
    id:"7",
    name:"Bilbo",
    occupation:"none",
    age:111
})

let avreageAge = 0;

for(let inc_age = 0; inc_age<arrObj.data.length; inc_age++){
    avreageAge += parseInt(arrObj.data[inc_age].age);
}

avreageAge = avreageAge / arrObj.data.length;

console.log(arrObj.header);
console.log(arrObj.data);
console.log(avreageAge+ " is the average age");



let finalCSV = [arrObj.header.join(",")].concat(
    arrObj.data.map(obj => arrObj.header.map(key => obj[key]).join(","))
  ).join("\n");
  
  console.log("CSV OUTPUT:\n" + finalCSV);
  