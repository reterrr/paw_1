(function () {
  const ex1Button = document.getElementById('ex1_button');
  const ex1Content = document.getElementById('ex1_content');
  
  ex1Button.addEventListener('click', function () {
    const numbers = Array.from({ length: 10 }, (_, i) => i).join(', ');
    ex1Content.textContent = numbers;
  });
})();
