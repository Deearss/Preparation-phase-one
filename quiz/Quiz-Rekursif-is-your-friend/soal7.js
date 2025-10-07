/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here
  if(equation <= 0) return "";

  const index_pertama = Math.floor(+(equation.toString()[0]) * (equation.toString().length > 1 ? 10 : 1)**(equation.toString().length - 1))
  
  const new_equation = +(equation.toString().split("").slice(1).join(""));
  
  const lanjut = ((new_equation > 0) && (equation.toString().length > 1)) ? " + " : "";
  
  return `${index_pertama}${lanjut}` + parseNumber(new_equation);
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3