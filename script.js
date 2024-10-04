(function () {
  const ex1Button = document.getElementById('ex1_button');
  const ex1Content = document.getElementById('ex1_content');
  
  ex1Button.addEventListener('click', function () {
    const numbers = Array.from({ length: 10 }, (_, i) => i).join(', ');
    ex1Content.textContent = numbers;
  });

  const ex2Text=document.getElementById('ex2_text');
  const ex2Content = document.getElementById('ex2_content');

  ex2Text.addEventListener('input', function () {
    const inputValue=ex2Text.value;

    const containsLetters = /[a-zA-Z]/.test(inputValue);
    const containsSpecialChars= /[^\d]/.test(inputValue);

    if(inputValue.length !==9){
      ex2Content.textContent ='Długość numeru musi być równa 9';

    }else if (containsLetters){
      ex2Content.textContent ='Numer nie może zawierać liter';
    }else if (containsSpecialChars){
      ex2Content.textContent='Numer nie może zawierać znaków specjalnych';
    }else{
      ex2Content.textContent='Numer telefonu jest poprawny';
    }
  })

  const ex3Element=document.getElementById('ex3_element');
  const ex3One=document.getElementById('ex3_one');
  const ex3Two=document.getElementById('ex3_two');

  //kiedy dropping start
  ex3Element.addEventListener('dragstart', function(event){
    event.dataTransfer.setData('text/plain', event.target.id);
  });

  //allow dropping into ex3_two
  ex3Two.addEventListener('dragover', function(event) {
    event.preventDefault();
  });

  //drop into ex3_two
  ex3Two.addEventListener('drop', function(event){
    event.preventDefault();
    const elementId=event.dataTransfer.getData('text');
    const element=document.getElementById(elementId);
    ex3Two.append(element);
  })

  ex3One.addEventListener('dragover', function(event){
    event.preventDefault();
  });

  ex3One.addEventListener('drop', function(event){
    event.preventDefault();
    const elementId=event.dataTransfer.getData('text')
    const element=document.getElementById(elementId);
    ex3One.append(element);
  })


})();