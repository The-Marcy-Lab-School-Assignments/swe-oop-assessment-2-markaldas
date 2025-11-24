# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 2
Encapsulation refers to having code reusable so that no one can change it by mistake, we can do this by using making `classes` and having methods or properties in them that are `private`
which allows us to be sure that nothing outside of the class can change the `private` methods or properties by accident. This is beneficial when programming because it allows our code to behave in the way we expect it to behave, and be consistent.

```js
class Bank {
  static #totalBankDeposits = 0
  constructor(deposit, withdraw) {
    this.deposit = deposit
    this.withdraw = withdraw
  }
}

```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2
The `this` keyword is something used in javascript to refer to the object being made. The `this` keyword is important because it allows us to refer to new `instances` that are being made, which saves time instead of having to rewrite the same code for multiple objects. With the `this` keyword you can just use it to save time and have your code more organized understanding what each method or property will have depending on the instance you create.

In the code snippet the `this` keyword is both referring to the new instances being made. For example, when it is doing `counterA.increment` 3 times the `this` keyword was referring to countA instance so when you called `console.log(counterA.count);` it later it would log 3 since we add 3 to countA. When you `console.log(counterB.count);` it would log 1 because it 
called `counterB.increment();` just once and since the `this` keyword is just referring to each new instance that is created it separates the two when calling or referring to the instance methods.    

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3
Polymorphism in OOP is when you either have the same class method name being used through inheritance but changed up a bit or it can be the same class method name used outside of inheritance.

### Example ###
```js
class Mark {
  hi() {
    return "Mark says hi"
  }
} 

class Jesus extends Mark {
  hi() {
    return "Jesus says hi"
  }
}

// or it could also be ::

class Bird (
  food() {
   return "I love worms"
  }
)

class Pigeon {
  food() {
    return "I love worms"
  }
}
```


---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

I would use inheritance to make a `class` named **Pets** that would have the properties `name`, `energy`, `happiness`, and a method called `sleep` since these are the properties and method that all other classes will **inherit**. 
I would then make a Cat, Dog, and Bird, class that will `extend` the Pets class and **inherit** all the properties and methods from the **Pets** `class`.
 
 The advantage of using inheritance rather than creating 3 separate classes, is that it saves time since you won't have to rewrite the same properties and methods again. It helps having your code organized, understanding which classes work with what and how they inherit each other. It also helps save some memory as well. 