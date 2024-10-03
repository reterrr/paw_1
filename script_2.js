const content = document.getElementById("ex2_text");
const messageElement = document.getElementById("ex2_content");

class Rule {
    constructor(ruleCallback, exception) {
        this.ruleCallback = ruleCallback;
        this.exception = exception || "Rule failed";
    }
    
    apply(value) {
        return this.ruleCallback(value) ? null : this.exception;
    }
}

class Iterator {
    setCallback(callback) {
        this.callback = callback;
    }
}

class Iterable {
    iter;
}

class Collection extends Iterable {
    constructor(data) {
        super();
        this.data = data;
        
        this.iter = new Iterator();
    }
    
    with(withCallback) {
        this.iter.setCallback(withCallback);
        
        return this;
    }
    
    iterate() {
        for (let rule of this.data) {
            
        }
        
        return this;
    }
}

class RulesCollection extends Collection {
    constructor(data) {
        super(data);
    }
    
}

class ValidatorResponse {
    constructor(arr) {
        this.arr = arr;
    }
    
    build() {
        for (let error of this.arr) {
            
        }
    }
}

class Validator {
    #controlSum;
    #response;
    
    static make() {
        this.#controlSum = new Bolean(true);
        this.#response = new ValidatorResponse();
    
        return new this();
    }
    
    with(ruleCollection) {
        this.rulesCollection = rulesCollection;
        
        return this;
    }
    
    #validate() {
        return this.rulesCollection.with(logic(this.#controlSum, this.#response, text)).iterate();
    }
    
    for(text) {
        this.text = text;
    }
    
    logic(controlSum, validResponse, text) {
        return (rule) => {
            controlSum = controlSum && (rule.apply(text));
        };
    }
    
    fire() {
        this.#validate();
        
        return this.#response;
    }
}

// Funkcja walidacji numeru telefonu
content.addEventListener("input", function () {
  const inputValue = content.value;

  // Sprawdzanie długości numeru
  if (inputValue.length !== 9) {
    messageElement.textContent = "Długość numeru musi być równa 9";
    return;
  }

  // Sprawdzanie, czy zawiera litery
  if (/[a-zA-Z]/.test(inputValue)) {
    messageElement.textContent = "Numer nie może zawierać liter";
    return;
  }

  // Sprawdzanie, czy zawiera znaki specjalne
  if (/[^0-9]/.test(inputValue)) {
    messageElement.textContent = "Numer nie może zawierać znaków specjalnych";
    return;
  }

  // Sprawdzanie, czy numer jest poprawny (dokładnie 9 cyfr)
  const regex = /^\d{9}$/;
  if (regex.test(inputValue)) {
    messageElement.textContent = "Numer telefonu jest poprawny";
  } else {
    messageElement.textContent = "Numer telefonu jest niepoprawny";
  }
});

