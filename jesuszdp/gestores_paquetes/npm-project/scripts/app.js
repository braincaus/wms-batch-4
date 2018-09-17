class Foo {
  constructor(message) {
    this.message = message;
  }

  print() {
    console.log(this.message);
  }
}

var foo = new Foo("Hello world!");
foo.print();