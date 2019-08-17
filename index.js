"use strict";

const Fuse = require("fuse.js");

const districtData = require("./district");
const constituencyData = require("./constituency");

// Function to search for Districts
exports.searchDistricts = input => {
  try {
    // Options To perform Search(see fuse Documentation: https://fusejs.io/#live-demo)
    let options = {
      shouldSort: true,
      threshold: 0.8,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["districts", "state"]
    };

    let fuse = new Fuse(districtData, options); // "districtData" is the array That contains all the districts

    // Performing the search that the users entered
    let result = fuse.search(input);

    return result;
  } catch (error) {
    console.log(error);
  }
};

// Function to search for Constituencies
exports.searchConstituency = input => {
  try {
    // Options To perform Search(see fuse Documentation: https://fusejs.io/#live-demo)
    let options = {
      shouldSort: true,
      threshold: 0.8,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["constituencies", "state"]
    };

    let fuse = new Fuse(constituencyData, options); // "constituencies" is the array That contains all the constituencies

    // Performing the search that the users entered
    let response = fuse.search(input);

    return response;
  } catch (error) {
    console.log(error);
  }
};

// Function to search for all districts
exports.allDistricts = () => {
  try {
    // returning all data in the array
    return districtData;
  } catch (error) {
    console.log(error);
  }
};

// Function to search for all constituencies
exports.allConstituencies = () => {
  try {
    // returning all data in the array
    return constituencyData;
  } catch (error) {
    console.log(error);
  }
};
