/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here
  // ALAMAK TIDAK BOLEH MAKE BUILT IN FUNCTION ☠️☠️☠️
  // BERTHINGKING . . .
  if (sentences.length < 1) return 0;
  
  let konsonan_ditemukan = false;

  // cek apakah huruf pertama pada sentences adalah huruf konsonan
  let p = sentences[0];
    if (
        (p === "b") || (p === "B") ||
        (p === "c") || (p === "C") ||
        (p === "d") || (p === "D") ||
        (p === "f") || (p === "F") ||
        (p === "g") || (p === "G") ||
        (p === "h") || (p === "H") ||
        (p === "j") || (p === "J") ||
        (p === "k") || (p === "K") ||
        (p === "l") || (p === "L") ||
        (p === "m") || (p === "M") ||
        (p === "n") || (p === "N") ||
        (p === "p") || (p === "P") ||
        (p === "q") || (p === "Q") ||
        (p === "r") || (p === "R") ||
        (p === "s") || (p === "S") ||
        (p === "t") || (p === "T") ||
        (p === "v") || (p === "V") ||
        (p === "w") || (p === "W") ||
        (p === "x") || (p === "X") ||
        (p === "y") || (p === "Y") ||
        (p === "z") || (p === "Z")
    ) {
        // jika p adalah huruf konsonan
        konsonan_ditemukan = true;
    }

    // kalo sentences tersisa tinggal 1 kata, maka new_sentences akan menimpa sentences jadi 
    // string kosong ("") karena perulangan yang ngisi new_sentences nggk jalan,
    // dipikir-pikir nggk salah sih karena tujuannya yaa biar karakter sentences "terlihat" berkurang
    // biar trigger rem yang kita pasang diatas -> if (sentences.length < 1) return 0;
    
    // intinya blok ini tuh buat ngurangin karakter pada sentences
    let new_sentences = "";
    for (let i = 1; i < sentences.length; i++) {
        new_sentences += sentences[i];
    }
    sentences = new_sentences;
  
  // kalo konsonan ditemukan yasudah return 1 + ...
  // biar jadi -> 1 + 0 + 1 + 0 + 0 + 1 + 1 + ..... dan seterusnya tergantung apakah konsonan ditemukan
  return (konsonan_ditemukan ? 1 : 0) + consonantCounterRecursive(sentences);
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3