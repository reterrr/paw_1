function ex1_button() {
  // Tworzenie ciągu liczb od 0 do 9 oddzielonych przecinkami
  let numbers = Array.from({ length: 10 }, (_, i) => i).join(", ");
  
  // Umieszczanie ciągu liczb w elemencie o ID ex1_content
  document.getElementById('ex1_content').textContent = numbers;
}

