class Burger{
    constructor(
        public size:true,
        public cheeze:boolean,
        public mushrooms:boolean,
        public cucumbers:boolean,
        public spicySause?:boolean,
        public salad?:boolean,
        
        
        
        
    ){}
}

class BurgerBuider {
    public size:true;
    public cheeze:boolean;
    public mushrooms:boolean;
    public cucumbers:boolean;
    public spicySause:boolean;
    public salad :boolean;
    public cutlet:true;

    addCheeze(cheeze:boolean){
        this.cheeze = cheeze;
        return this
    }
    addMushrooms(mushrooms:boolean){
        this.mushrooms = mushrooms
        return this
    }
    addCucumbers(cucumbers:boolean){
        this.cucumbers = cucumbers
        return this
    }
    addSpicySause(spicySause:boolean){
        this.spicySause = spicySause
        return this
    }
    addSalad(salad:boolean){
        this.salad=salad
        return this
    }
    buid(){
        return new Burger(this.size,this.cheeze,this.mushrooms,this.cucumbers,this.spicySause,this.cutlet)
    }
}

const burger = new BurgerBuider()
burger.addCheeze(true)
burger.addCucumbers(true)
burger.addMushrooms(true)
console.log(burger)