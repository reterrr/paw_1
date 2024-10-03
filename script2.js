const content = document.getElementById("ex2_text");
const messageElement = document.getElementById("ex2_content");

class RuleException {
    constructor(exception) {
        this.exception = exception;
    }
    
    get() {
        return this.exception;
    }
}

class Rule {
    constructor(ruleCallback, exception) {
        this.ruleCallback = ruleCallback;
        this.exception = exception || "Rule failed";
    }
    
    apply(value) {
        const result = this.ruleCallback(value);
        return result ? true : new RuleException(this.exception);
    }
}

class Iterator {
    setCallback(callback) {
        this.callback = callback;
    }
    
    iterate(data) {
        for (const item of data) {
            this.callback(item);
        }
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
    
    with(callback) {
        this.iter.setCallback(callback);
        return this;
    }
    
    iterate() {
        this.iter.iterate(this.data);
        return this;
    }
}

class RulesCollection extends Collection {
    constructor(data) {
        super(data);
    }
}

class ValidatorResponse {
    constructor() {
        this.arr = [];
    }
    
    push(response) {
        this.arr.push(response);
    }
    
    toStr() {
        return this.arr.join(',\n');
    }
}

class Validator {
    #controlSum;
    #response;
    #rulesCollection;
    #text;

    constructor() {
        this.#controlSum = true;
        this.#response = new ValidatorResponse();
    }

    static make() {
        return new Validator();
    }

    with(rulesCollection) {
        this.#rulesCollection = rulesCollection;
        return this;
    }

    #validate() {
        this.#rulesCollection
            .with(this.#logic(this.#controlSum, this.#response, this.#text))
            .iterate();
    }

    for(text) {
        this.#text = text;
        return this;
    }

    #logic(controlSum, validResponse, text) {
        return (rule) => {
            const result = rule.apply(text);
            if (result instanceof RuleException) {
                controlSum = false;
                validResponse.push(result.get());
            }
        };
    }

    fire() {
        this.#validate();
        
        
        return this.#response;
    }
}

// Validation rules for phone number
const rules = new RulesCollection([
    new Rule(value => value.length === 9, "Długość numeru musi być równa 9"),
    new Rule(value => !/[a-zA-Z]/.test(value), "Numer nie może zawierać liter"),    
    new Rule(value => /^\d{9}$/.test(value), "Numer telefonu jest niepoprawny")
]);

// Input event listener for validation
content.addEventListener("input", function () {
    const inputValue = content.value;
    
    const validator = Validator
        .make()
        .with(rules)
        .for(inputValue)
        .fire();
        
    const message = validator.toStr();
    
    messageElement.textContent = message || "Numer telefonu jest poprawny";
});

