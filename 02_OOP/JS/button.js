class Button{
    constructor(width,height,text)
    {
          this.width = width;
          this.height = height;
          this.text = text;
    }
    showBtn()
    {
        document.write(`<button style = "width:${this.width}px; height:${this.height}px">${this.text} </button>`)
    }
}
let but = new Button(300,200,"thank you");
but.showBtn();

class BootstrapButton extends Button{
    constructor(width,height,text,color){
        super(width,height,text);
        this.color = color;
    }
    showBtn()
    {
        document.write(`<button style = "width:${this.width}px; height:${this.height}px; color:${this.color}">${this.text} </button>`) 
    }
}
let but1 = new BootstrapButton(300,200,"New but","Blue");
but1.showBtn();
