const mongoose = require("mongoose");
const Club = require("../models/club");

mongoose.connect("mongodb://localhost/jdrland");

const clubs = [
  {
    name: "Chez Omphéin Tyssom",
    website:
      "http://www.google.fr/maps/place/34+Rue+de+Montlh%C3%A9ry,+91400+Orsay/@48.6882229,2.1797403,17z/data=!3m1!4b1!4m8!1m2!2m1!1s34+rue+de+montlh%C3%A9ry!3m4!1s0x47e5d60f63786b23:0xcb17cf46a8d714f3!8m2!3d48.6882194!4d2.1819343",
    address: {
      addressLineOne: "34 rue de montlhéry",
      addressLineTwo: "",
      city: "ORSAY",
      state: "Ile-de-France",
      postcode: 91400,
      country: "France"
    },
    email: "mathieu.revillion@hotmail.fr",
    coordinates: {
      latitude: 48.688411,
      longitude: 2.181934
    },
    tel: 0658148230,
    gamemasters: [],
    members: []
  },
  {
    name: "Cercle Fantastique",
    website: "http://www.cerclefantastique.fr/",
    address: {
      addressLineOne: "75 rue Vincent Fayo",
      addressLineTwo: "La Résidence Universitaire",
      city: "CHATENAY-MALABRY",
      state: "Ile-de-France",
      postcode: 92290,
      country: "France"
    },
    email: "cfantasique@yahoo.fr",
    coordinates: {
      latitude: 48.764219,
      longitude: 2.282028
    },
    tel: 0164938203,
    gamemasters: [],
    members: []
  },
  {
    name: "La Boite à Chimère",
    website: "http://laboiteachimere.com/",
    address: {
      addressLineOne: "19 avenue Victoria",
      addressLineTwo: "Dernier Bar avant la fin du monde",
      city: "PARIS",
      state: "Ile-de-France",
      postcode: 75001,
      country: "France"
    },
    email: "gerard.kiloun@gmail.com",
    coordinates: {
      latitude: 48.858083,
      longitude: 2.346347
    },
    tel: 0692736483,
    gamemasters: [],
    members: []
  }
];

Club.remove({}, () => {
  Club.create(clubs, err => {
    if (err) {
      throw err;
    }
    console.log(`Created ${clubs.length} clubs`);
    mongoose.connection.close();
  });
});
