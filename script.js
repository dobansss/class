




class DivaideAre{
    constructor(a,b) {
      this.a = a;
      this.b = b;
    }
    divaiding(){
        return this.a + this.b;
    }
}

class ColoredRectangleWithText extends DivaideAre {
 constructor(a,b,text,bgcolor) {
     super(a,b);
     this.text = text;
     this.bgcolor = bgcolor;

 }
  showMyProps(){
      console.log(`Textul: ${this.text}, coloare ${this.bgcolor} `);
  }
}


const div = new ColoredRectangleWithText(2,2,'hello','red');

div.showMyProps();

console.log(div.divaiding());


//
// const a = new DivaideAre(2,5);
// const b = new DivaideAre(22,5);
//
// console.log(a.divaiding());
// console.log(b.divaiding());