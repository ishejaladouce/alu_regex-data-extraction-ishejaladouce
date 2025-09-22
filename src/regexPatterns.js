// This file contains all regex patterns for data extraction

const email = /\b[A-Za-z0-9._%=-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
const url = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
const phone = /(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}/g;
const creditCard = /\b\d{4}[- ]\d{4}[- ]\d{4}[- ]\d{4}\b/g;
const time = /\b((0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]|(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM|am|pm))\b/g;
const currency = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g;

// #Export patterns so that the test files can use them
module.exports = { email, url, phone, creditCard, time, currency };