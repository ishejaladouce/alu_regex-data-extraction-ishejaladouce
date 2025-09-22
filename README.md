# ALU Regex Data Extraction

This project demonstrates the use of **Regular Expressions (Regex)** to extract different types of data from strings.  

## Features

The regex patterns in this project can extract:

1. Email addresses
2. URLs
3. Phone numbers  
4. Credit card numbers  
5. Time (12-hour and 24-hour formats)  
6. Currency amounts

Each regex pattern is tested with **sample inputs** that include **valid and invalid cases** to show correct extraction and edge-case handling.

## File Structure

alu_regex-data-extraction-ishejaladouce/
│
├── src/
│   └── regexPatterns.js       # All regex patterns for emails, URLs, phones, credit cards, time, and currency
│
├── tests/
│   ├── testEmails.js          # Tests for email regex
│   ├── testURLs.js            # Tests for URL regex
│   ├── testPhones.js          # Tests for phone number regex
│   ├── testCreditCards.js     # Tests for credit card regex
│   ├── testTimes.js           # Tests for time regex
│   └── testCurrency.js        # Tests for currency regex
│
└── README.md                  # Project overview, instructions, and examples

## Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/ishejaladouce/alu_regex-data-extraction-ishejaladouce.git
cd alu_regex-data-extraction-ishejaladouce

2. Install Node.js (if not already installed) to run JavaScript files.

3. Run any test file to see the regex in action. For example:

node tests/testEmails.js
node tests/testURLs.js
node tests/testPhones.js
node tests/testCreditCards.js
node tests/testTimes.js
node tests/testCurrency.js

4. Check the console output:

    -Valid matches are displayed automatically.

    -Invalid examples are ignored, demonstrating edge-case handling.

5. Add your own strings in the samples array of any test file to test more cases.
