# Word-Guess-Game

The goal of this game is to successfully guess the given Bootstrap class within 7 attempts. I made this game to help me memorize all the Bootstrap classes. Knowing the name of the a given Bootstrap class is one thing, but knowing its function is another story. I still have much to learn after this application was completed.

A live demo can be found [HERE](https://guhuyan.github.io/Word-Guess-Game/).

## Technologies
* HTML
* CSS
* Javascript

## Notes

11/30/2019

I remember this! This is a fun little game that I created to help me learn all those Bootstrap classes from the beginning of my coding journey. This was before learning jQuery. It's crazy how much I have learned since then. Anyway! This app chooses a random word which is based on a random number between zero and the length of the words array (minus 1). The player then have to incrementally start guessing each character in the word until the whole word is visible. Correct and wrong player guesses are tracked by the game. If the player can't complete the word by 7 guesses, he or she loses. Wins and loses are also tracked by the game via Javascript. 
  
The most difficult part of coding this game was learning how to use fromCharCode, charAt, and indexOf methods to get the key code for each of the characters that user has pressed on their keyboard and compare it to the index in the word array. This project was a couple steps up in difficulty. I really enjoyed making it.
