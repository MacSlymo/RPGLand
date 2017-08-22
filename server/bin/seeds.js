const mongoose = require("mongoose");
const Club = require("../models/club");

mongoose.connect("mongodb://localhost/jdrland");

const clubs = [
  {
    name: "Chez Omphéin Tyssom",
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
