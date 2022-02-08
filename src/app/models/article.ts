export class Article {
    constructor(
        public _id: string=" ",
        public name: string=" ",
        public description: string=" ",
        public deparment: string=" ",
        public stock: number=0,
        public up: number=0
       
      ) {}
  /*    public name: string;
        public description: string;
        public deparment: string;
        public stock: number;
        public up: number;
  
    constructor(
      name : string,
      description : string,
      deparment : string,
      stock : number,
      up : number
      
    ) {
        this.name = name;
        this.description = description;
        this.deparment = deparment;
        this.stock = stock;
        this.up = up;
      
    }*/
}
