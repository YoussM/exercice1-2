function goku(nom, sante, attack, defense, ) {
    this.nom = nom;
    this.sante = sante;
    this.attack = attack;
    this.defense = defense;

    this.getCombat = function(x) {

        x.sante -= this.attack - x.defense;
        return x.sante;

    };
}

var guerrier1 = new goku("gohan", 100, 20, 0);
var guerrier2 = new goku("cell", 200, 30, 0);
var mag1 = new merlin("merl1", 300, 40, 0, 20);


function merlin(nom, sante, attack, defense, mana) {
    this.nom = nom;
    this.sante = sante;
    this.attack = attack;
    this.defense = defense;
    this.mana = mana;

  this.getCombat = function(x) {
      x.sante -= this.attack - x.defense;
      return x.sante;

  };

  this.getSante = function(){
    if (this.mana < 10) {
      alert("ta plus de mana!!!!!");

    }

     else if (this.sante < 300) {
      this.mana -=10 ;
      this.sante += 10 ;
    };

    return this.sante;
  };

}

$("#btn").click(function(){
  console.log(mag1.nom,guerrier2.getCombat(mag1)+ " " + "pv"+" "+ mag1.nom,guerrier1.getCombat(mag1)+ " " + "pv"+" ");
  console.log(guerrier1.nom,mag1.getCombat(guerrier1)+ " " + "pv"+" "+ guerrier2.nom,mag1.getCombat(guerrier2)+ " " + "pv"+" ");
  console.log(mag1.getSante()+ " " +"+10pv");
  console.log(mag1.mana);
})
