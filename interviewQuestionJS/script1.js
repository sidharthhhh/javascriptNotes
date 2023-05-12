// curring in javascript
// example f(a,b) into f(a)(b)

const f = (a) =>{
    return (b) =>{
        return `${a} ${b}`;
    }
}

console.log(f(3)(5))

// question 1 - sum(2)(3)(7)

const sum = (a) => {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}

console.log(sum(2)(3)(7))

// Question 2 -
//  evaluate("sun")(4)(2) => 6
//  evaluate("multiply")(4)(2) => 8
//  evaluate("divide")(4)(2) => 2
//  evaluate(substract")(4)(2) => 2

const evaluate = (operation) => {
    return (a) => {
        return (b) => {
            if(operation === 'sum') return a+b;
            else if(operation === 'multiply') return a*b;
            else if(operation === 'divide') return a/b;
            else if(operation === 'subtract') return a-b;
            else return "invalid operation is done here"
        }
    }
}

// console.log(evaluate("divide")(6)(3))

const mul = evaluate("multiply");
console.log(mul(4)(2)) // 8


// Question 3 - infinite curring  => sum(1)(2)(3)...........(n)
// exactly question is console.log(add(5)(2)(6)()); in this format

const add = (a) =>{
  return (b) =>{
      if (b) return add(a+b);
        else return a;
  }
}

console.log(add(5)(2)(6)())

// Question 4 - curring vs partial application

// partial application

const smm = (a) => {
    return (b,c) => {
        return a+b+c;
    }
}
console.log(smm(20)(2,3))

// curring

const smm1 = (a) => {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}
console.log(smm1(20)(2)(3))

// Question 5 - manupulating the DOM



