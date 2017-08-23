var homme = {
  firstName: "youssef",
  lastName: "mercier",
  age: 30,
  country: "france",
  pay: ["visa", "paypal", "mastercard", "westernunion"],
  getFirstName: function() {
      alert(this.firstName);
  },

  getLastName: function() {
      alert(this.lastName);
  },

  getBorn: function() {
      alert(2017 - this.age);
  }

};

homme.getFirstName();
homme.getLastName();
homme.getBorn();


var verification = {
  country: ["ESPAGNE", "BELGIQUE", "PORTUGAL", "SUISSE", "FRANCE"],
  pay: ["VISA", "PAYPAL", "MASTERCARD", "WESTERNUNION"],
  minAge: 18,

  CountryVerification: function() {

      if (verification.country.includes(homme.country.toUpperCase()) == true) {
          alert("good Country");
      } else {
          alert("no");
      }
  },

  yesCarte: function() {

      var tab = [];

      for (var i = 0; i < homme.pay.length; i++) {


          tab.push(this.pay.includes(homme.pay[i].toUpperCase()));
      }


      if (tab.includes(true) == true) {
          alert("good Pay");
      } else {
          alert("no");
      }
  },

  age: function() {



    if (homme.age >= this.minAge) {

      alert("good Age");

    }

    else {
       alert("No Good Age");
    }


  }
};

verification.CountryVerification();
verification.yesCarte();
verification.age();





// guerrier
