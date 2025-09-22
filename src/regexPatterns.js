// This file stores all regex patterns for extraction

const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g   // Matches standard email addresses
const url = /https?:\/\/[^\s/$.?#].[^\s]*/g                          // Matches URLs starting with http or https
const phone = /(\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}/g           // Matches common phone number formats
const creditCard = /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g      // Matches 16-digit credit card numbers
const time = /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM)?\b/gi    // Matches 12-hour and 24-hour times
const currency = /\$\d{1,3}(,\d{3})*(\.\d{2})?/g                 // Matches dollar amounts with optional commas and decimals
const htmlTags = /<[^>]+>/g                                     // Matches simple HTML tags
const hashtags = /#[\w]+/g                                     // Matches hashtags starting with #
  

// #Export patterns so that the test files can use them
module.exports = { email, url, phone, creditCard, time, currency, htmlTags, hashtags };
