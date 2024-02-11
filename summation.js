var numbers = [1, 2, 3, 4, 5];

// Dizideki sayıların toplamını hesaplayalım
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

// Toplamı ekrana yazdıralım
console.log("Dizideki sayıların toplamı: " + total);