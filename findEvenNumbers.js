// Dizi içindeki çift sayıları bulma
const findEvenNumbers = (arr) => {
  // Boş bir dizi oluşturarak çift sayıları depolayacağız
  const evenNumbers = [];

  // Dizi üzerinde bir for döngüsü ile gezinme
  for (let i = 0; i < arr.length; i++) {
    // Her elemanı kontrol et, çiftse evenNumbers dizisine ekle
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  // Sonuç dizisini döndür
  return evenNumbers;
};

// Örnek kullanım
const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = findEvenNumbers(sampleArray);

// Sonucu konsola yazdır
console.log("Original Array:", sampleArray);
console.log("Even Numbers:", result);