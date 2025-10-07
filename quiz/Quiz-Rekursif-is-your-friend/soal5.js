/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
  //code here
  // pasang rem biar tidak unlimited rekursif
  if (str.length < 1) return "";
  
  const characters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9'
];

  let new_str = "";
  let adalah_karakter = false;

  let batas_akhir = characters.length;
  let ulang_sekali_lagi = false;
  
  for (let i = 0; i < batas_akhir; i++) {
    // jika minta diulang maka tambahkan satu persatu karakter str kedalam new_str
    // dan karena i dimulai dari 1 maka str index pertama tadi
    // tidak ikut ketambah kedalam new_str
    if (ulang_sekali_lagi === true) {
        new_str += str[i];
    } 
    
    // kalo str index pertama itu karakter, maka jalankan lagi perulangan yang ini,
    // dengan cara kembalikan i ke 1 (karena ketika i = 0 maka i++ membuatnya jadi 1 lagi)
    // dan jalankan kembali perulangan dengan membuat ulang_sekali_lagi = true;
    else if (str[0] === characters[i]) {
        i = 0;
        batas_akhir = str.length;
        adalah_karakter = true;
        ulang_sekali_lagi = true;
    }
    
    // kalo perulangan udah sampe ujung dan str index pertama ini
    // tak termasuk kedalam jenis karakter manapun maka ulang lagi perulangannya
    // kembalikan i ke 1 (karena ketika i = 0 maka i++ membuatnya jadi 1 lagi)
    // dan jalankan kembali perulangan dengan membuat ulang_sekali_lagi = true;
    else if (ulang_sekali_lagi === false && (i === (batas_akhir - 1))){
        i = 0;
        batas_akhir = str.length;
        adalah_karakter = false;
        ulang_sekali_lagi = true;
    }
  }

  // ya begitulah 🗿
  let result = (adalah_karakter ? str[0] : "");
  str = new_str;
  
  return result + hapusSimbolRec(str);
}

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbolRec("ma@#k!an~")); // makan
console.log(hapusSimbolRec("coding")); // coding
console.log(hapusSimbolRec("1+3-5*2=100")); // 1352100
