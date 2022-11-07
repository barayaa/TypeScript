class Employe {
    id!: number;
    name!: String;
    adresse!: String

    constructor(id: number, name: String, adresse: String) {
        this.id = id,
        this.name = name
        this.adresse = adresse
    }
   
    getNameWithAdress(): String{
        return this.name + " " + this.adresse
    }
}

let Abdoul = new Employe(1, 'Abdoul', 'BZ2');

let Adresse  = Abdoul.getNameWithAdress();
console.log(Adresse);


console.log(Abdoul);
