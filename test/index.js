const name = 'hello';

function myFunc(sayIt) {
  return sayIt;
}

class MySuperClass {
  constructor() {
    this.name = '';
  }

  myMethod = change => {
    this.name = change;
  };
}

myFunc(name);
const obj = MySuperClass();
obj.myMethod('test');
