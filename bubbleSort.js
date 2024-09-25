// Array yang akan diurutkan
let arr = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21];

// Fungsi Bubble Sort
function bubbleSort(array) {
    let n = array.length;
    // Melakukan iterasi sebanyak n-1 kali
    for (let i = 0; i < n - 1; i++) {
        // Bandingkan elemen yang berdekatan
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Tukar jika elemen saat ini lebih besar dari elemen berikutnya
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// Menjalankan fungsi Bubble Sort
let sortedArray = bubbleSort(arr);
console.log("Array yang terurut:", sortedArray);
