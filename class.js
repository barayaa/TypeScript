var Employe = /** @class */ (function () {
    function Employe(id, name, adresse) {
        this.id = id,
            this.name = name;
        this.adresse = adresse;
    }
    Employe.prototype.getNameWithAdress = function () {
        return this.name + " " + this.adresse;
    };
    return Employe;
}());
var Abdoul = new Employe(1, 'Abdoul', 'BZ2');
var Adresse = Abdoul.getNameWithAdress();
console.log(Adresse);
console.log(Abdoul);
