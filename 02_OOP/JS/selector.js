class Selector{
    constructor(name){
        this.name = name;
        this.styles = [];
    }

    addProperty(name,value)
    {
        this.styles[name] = value;
    }
    removeProperty(name){
        delete this.styles[name];
    }
    getCSS(){
      document.write(`.${this.name} {`);
      for(const key in this.styles)
      {
        document.write(`${key}: ${this.styles[key]}; <br>`);
      }
      document.write("}<br>");
      
    }
}

let spec = new Selector("main");
spec.addProperty("margin","10px");
spec.addProperty("padding","10px");
spec.addProperty("align items","center");
spec.addProperty("font-weight","bold");
spec.getCSS();
spec.removeProperty("margin");
spec.getCSS();
