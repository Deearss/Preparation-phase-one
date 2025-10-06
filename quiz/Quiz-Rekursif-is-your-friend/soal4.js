/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
 menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang 
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/

function dividableRecursive(array, num) {
  //code here

  if (array.length < 1) return "";

  // kita pake akal-akalan barat buat bikin function sendiri
  // yang gunanya buat ngehapus array index pertama
  // biar array.length-nya berkurang 1 😎
  function myArrayShift(arr, index = 0) {
    let result = [];
    
    // step 1 🥸
    // kalo sedari awal data array-nya tinggal 1 
    // yaudah return array kosongan [] keluar function,
    // karena itu cara tergampang buat ngurangin isi array-nya
    if (index === 0 && (arr.length === 1)) return result;
    
    // step 4 (jalan setelah step 3) 🥸🥸🥸🥸
    // kalo udah diujung array maka stop rekursif
    // dan return array yang udah diolah di percabangan kedua
    // dengan ditambahin array index sekarang kedalam array itu
    // lalu return ke percabangan pertama
    if (index === (arr.length - 1)) {
        return [arr[index]];
    } 

    // step 2 (jalan kalo step 1 tidak berhasil) 🥸🥸
    // kalo baru mulai maka return array yang index pertamanya result,
    // berhubung result itu array kosongan dan kalo di destruct nggk jadi apa-apa
    // maka index pertamanya yaa nggk ada, dan array-nya masih kosong,
    // Hingga kita isi pake array destruction dari array
    // yang di buat pake percabangan dibawah percabangan yang ini.
    // Kalo udah diisi, baru kita return array ini keluar function.
    else if (index === 0) {
        return [...result, ...myArrayShift(arr, index + 1)];
    } 

    // step 3 (jalan setelah step 2) 🥸🥸🥸
    // nah ini percabangan yang kumaksud, jadi percabangan ini intinya
    // akan me-return array mulai index ke 1 sampe index terakhir
    // nah array ini akan di return ke percabangan diatas tadi
    else if (index > 0) {
        return [arr[index], ...myArrayShift(arr, index + 1)];
    } 
  }

  let habis_dibagi_num = (array[0] % num === 0) ? `${array[0]} ` : "";

  array = myArrayShift(array);

  // jalankan rekursif untuk membangun string buat di return
  return habis_dibagi_num + dividableRecursive(array, num);
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)); // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)); // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)); // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)); // 66 132
