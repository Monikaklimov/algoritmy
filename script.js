const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
  
  // Vypište všechna čísla na stránku
  numbers.forEach(function(number) {
    document.body.innerHTML += `<p>${number}</p>`; // Přidá číslo na stránku
  });
// Vypište druhé mocniny všech čísel na stránku
numbers.forEach(function(number) {
    document.body.innerHTML += `<p>2. mocnina ${number} je ${number ** 2}</p>`;
  });
// Vypište pouze záporná čísla
numbers.forEach(function(number) {
    if (number < 0) {
      document.body.innerHTML += `<p>Záporné číslo: ${number}</p>`;
    }
  });
// Vypište absolutní hodnoty všech čísel na stránku
numbers.forEach(function(number) {
    document.body.innerHTML += `<p>Absolutní hodnota ${number} je ${Math.abs(number)}</p>`;
  });

// Vypište pouze sudá čísla
numbers.forEach(function(number) {
    if (number % 2 === 0) {
      document.body.innerHTML += `<p>Sudé číslo: ${number}</p>`;
    }
  });
// Vypište pouze ta čísla, jejichž absolutní hodnota je dělitelná třemi
numbers.forEach(function(number) {
    if (Math.abs(number) % 3 === 0) {
      document.body.innerHTML += `<p>Číslo ${number} má absolutní hodnotu dělitelnou třemi.</p>`;
    }
  });
// Vypište vzdálenost každého čísla od čísla 5
numbers.forEach(function(number) {
    document.body.innerHTML += `<p>Vzdálenost čísla ${number} od čísla 5 je ${Math.abs(number - 5)}</p>`;
  });
   // Vypište druhou mocninu vzdáleností všech čísel od čísla 5
numbers.forEach(function(number) {
    document.body.innerHTML += `<p>2. mocnina vzdálenosti čísla ${number} od čísla 5 je ${(Math.abs(number - 5) ** 2)}</p>`;
  });
// Spočítejte kolik je záporných čísel
const negativeCount = numbers.reduce(function(count, number) {
    return number < 0 ? count + 1 : count;
  }, 0);
  
  document.body.innerHTML += `<p>Počet záporných čísel: ${negativeCount}</p>`;
// Spočítejte součet všech čísel
const sum = numbers.reduce(function(total, number) {
    return total + number;
  }, 0);
  
  document.body.innerHTML += `<p>Součet všech čísel: ${sum}</p>`;

// Spočítejte průměr všech čísel
const average = sum / numbers.length;

document.body.innerHTML += `<p>Průměr všech čísel: ${average}</p>`;
// Spočítejte součet kladných čísel
const positiveSum = numbers.filter(function(number) {
    return number > 0;
  }).reduce(function(total, number) {
    return total + number;
  }, 0);
  
  document.body.innerHTML += `<p>Součet kladných čísel: ${positiveSum}</p>`;
  
  