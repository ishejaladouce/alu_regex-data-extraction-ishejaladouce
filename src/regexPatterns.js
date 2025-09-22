// This file contains all regex patterns for data extraction

const email = /\b[A-Za-z0-9._%=-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
const url = /https?:\/\/[^\s/$.?#].[^\s]*/gi;

// #Export patterns so that the test files can use them
module.exports = { email, url };