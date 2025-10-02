/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

function angkaTerbesar(sentence) {
  //code here
  // oke jadi aku ngakalinnya dengan cara ngebandingin index pertama arraynya dengan index setelahnya
  // kalo index pertama lebih gede daripada index setelahnya maka hapus index setelahnya
  // nah kan data di arraynya udah berkurang 1 tuh, baru aku panggil lagi functionnya dengan masukin
  // sentence yang udah berkurang 1 data-nya. Jika index pertama dari sentence itu malah lebih kecil
  // dari index setelahnya maka index pertama itu yang dihapus, sama aja sih ngurangin 1 data di arraynya.
  // harusnya kalo nanti data dalam arraynya cuma tinggal 1 berarti itulah angka terbesarnya 🗿
  
  // kalau arraynya kosong return -1
  if (sentence.length < 1) return -1;

  // kalo udah tinggal 1 aja isi dalam array sentence-nya maka harusnya itulah angka terbesarnya
  if (sentence.length === 1) return sentence[0];

  // kalo index pertama lebih besar daripada index setelahnya berarti index pertama masih layak
  // dipertahankan dan index setelahnya lah yang di kick keluar array
  if (sentence[0] > sentence[1]) sentence.splice(1, 1);

  // kalo index pertama justru lebih kecil daripada index setelahnya berarti index pertama harus di kick
  // yang berarti index setelahnya bakalan otomatis bergeser jadi index pertama yang baru di array sentence
  else if (sentence[0] < sentence[1]) sentence.splice(0, 1);

  return angkaTerbesar(sentence);
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1