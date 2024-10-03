// Selekcja przycisku o ID ex1_button
const btn = document.getElementById("ex1_button");

// Funkcja losująca liczby od 0 do 9
function generateNumbers() {
  // Tworzenie ciągu liczb od 0 do 9 oddzielonych przecinkami
  return Array.from({ length: 10 }, (_, i) => i).join(", ");
}

// Dodanie zdarzenia kliknięcia do przycisku
btn.addEventListener("click", function () {
  // Pobieranie elementu o ID ex1_content i wstawianie wygenerowanego ciągu liczb
  const content = document.getElementById("ex1_content");
  content.textContent = generateNumbers();
});



