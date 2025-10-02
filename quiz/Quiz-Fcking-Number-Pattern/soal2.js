/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


function squareNumber(num) {
  //code here
  if (num < 3) return "Minimal input adalah 3";

  // buat variabel penampung baris dan kolom
  const map = [];
  
  // tentukan angka permulaan kolom
  let awalan = 1;
  let akhiran = (awalan + num);
  
  // buat perulangan untuk merancang baris
  for (let i = 1; i <= num; i++) {
    // buat variabel baris untuk menampung kolom
    const baris = [];

    // buat perulangan untuk merancang kolom
    for (let j = awalan; j <= akhiran; j++) {
      // masukkan kolom ke baris

      // kalo j itu kelipatan 4 maka ganti jadi karakter '#'
      if (j % 4 === 0) baris.push("#");
      
      // kalo j itu genap maka ganti jadi karakter 'o'
      else if (j % 2 === 0) baris.push("o");
      
      // kalo j itu ganjil maka ganti jadi karakter 'x'
      else if (j % 2 === 1) baris.push("x");
      
      // jika berada di akhir perulangan ganti awalan jadi angka terakhir di kolom baris ke i
      if (j === (akhiran - 1)) {
        // ubah awalan dan akhiran
        awalan = (j + 1);
        akhiran = (awalan + num);
        break;
      }
    }

    // kalo baris ganjil maka push baris ke map seperti biasa
    if (i % 2 === 1) map.push(baris);
    
    // kalo baris genap maka reverse dulu baris-nya baru push ke map
    else if (i % 2 === 0) map.push(baris.reverse());
  }

  return map;
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ 
//   [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, o, x, #, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, x ] 
// ]

console.log(squareNumber(2)); // Minimal input adalah 3