# Programming Language Suggestor

#### By Tony Froccaro

#### Programming Language Suggester utilizing HTML, CSS, Javascript and jQuery

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Description

The Programming Language Suggester begins by asking the user five questions. Based on the results of the five questions, the application will suggest what it thinks would be the best programming language for the user to explore based upon there inputs.

1. Question 1 has no impact on the language suggestors output.
2. For the application to suggest JavaScript, input:

- A user-friendly, front-end language. Answer "No" to questions 4 and 5.

3. For the application to suggest Python, input:

- A user-friendly, back-end language. Answer "Yes" to question 4, and no to question 5.

4. For the application to suggest Swift, input:

-  "No Preference" for question 2. "Both" for question 3. "No" for question 4. "Yes" for question 5. 

## Setup/Installation Requirements

- Download git
- Navigate to your Desktop folder
- Make a folder to store the application files
- Navigate to https://github.com/tonyfroc/tf-language-suggester
- Select code, then copy the link below "Clone"
- In terminal type:
- `git init`
- `git clone https://github.com/tonyfroc/tf-language-suggester.git`
- `git remote add your_initials main https://github.com/tonyfroc/tf-language-suggester.git`
- `git push your_initials main`
- Download a text editor (preferably VSCode) and
- In terminal, type: `code .` and open the `index.html` in a web browser.

## Known Bugs

- The jQuery and JavaScript logic does not take into account every possible combination that can be performed. Only three possible outcomes were accounted for. See the scripts.js file for more insight.

## License

_[MIT](https://opensource.org/licenses/MIT)_  
Copyright (c) 2022, Tony Froccaro