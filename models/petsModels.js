const fs = require("fs");
const path = require("path");

const pathToPetDB = path.resolve(__dirname, "../database/PetsDataSet.json");

function getAllPets() {
  try {
    const allPets = fs.readFileSync(pathToPetDB);
    const petList = JSON.parse(allPets);
    return petList;
  } catch (err) {
    console.log(err)
  }
}

module.exports = { getAllPets };