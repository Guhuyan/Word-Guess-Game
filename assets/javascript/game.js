//Load Javascript after the DOM has been loaded. If this is working, you'd see 'Live reload enabled.' in the console.
document.addEventListener("DOMContentLoaded", function(event) { 
    //Array with all the words
    const words = ["container","container-fluid", "row", "row-no-gutters", "col","active", "danger", "info", "success", "warning", "affix", "alert", "alert-dismissible", "alert-link", "breadcrumb", "btn", "btn-block", "btn-group", "btn-group-justified", "btn-group-vertical", "btn-info", "btn-link", "btn-success", "btn-warning", "caption", "caret", "carousel", "carousel-caption", "carousel-control", "carousel-indicators", "carousel-inner", "item", "left", "right", "next", "prev", "center-block", "checkbox", "checkbox-inline", "clearfix", "close", "collapse", "control-label", "divider", "dropdown", "dropdown-header", "dropdown-menu", "dropdown-menu-right", "embed-responsive", "embed-responsive-item", "dropdown-toggle", "form-control", "form-group", "form-horizontal", "glyphicon", "has-danger", "has-success", "had-warning", "help-block", "hidden", "show", "invisible", "icon-bar", "icon-next", "icon-prev", "img-circle", "img-responsive", "img-rounded", "img-thumbnail", "in", "input-group", "input-group-addon", "input-group-btn", "jumbotron", "label", "label-danger", "label-info", "label-success", "label-warning", "lead", "list-group", "list-group-item", "list-group-item-heading", "item-group-item-text", "list-inline", "list-unstyled", "mark", "media", "media-body", "media-left", "media-right", "media-heading", "media-list", "media-object", "modal", "modal-body", "modal-content", "modal-dialog", "modal-footer", "modal-header", "modal-lg", "modal-open", "modal-sm", "modal-title", "nav", "nav-justified", "nav-stacked", "nav-tabs", "navbar", "navbar-brand", "navbar-btn", "navbar-collapse", "navbar-fixed-bottom", "navbar-fixed-top", "navbar-form", "navbar-header", "navbar-default", "navbar-inverse", "navbar-left", "navbar-right", "navbar-link", "navbar-text", "navbar-toggle", "navbar-nav", "nav-tabs", "nav-pills", "page-header", "pager", "pagination", "pagination-lg", "pagination-sm", "previous", "next", "panel", "panel-group", "panel-body", "panel-collapse", "panel-title", "panel-heading", "panel-footer", "popover", "pre-scrollable", "progress", "progress-bar", "progress-bar-striped", "pull-left", "pull-right", "small", "sr-only", "sr-only-focusable", "tab-content", "tab-pane", "table", "table-bordered", "table-condensed", "table-hover", "table-responsive", "text-uppercase", "text-lowercase", "text-hide", "text-muted", "text-center", "text-left", "text-right", "text-justify", "text-nowrap", "thumbnail", "tooltip", "well", "well-lg", "well-sm"];
    //Create an array to hold characters adding up to the word, but in array form.
    let correctWord = [];
    //Create an empty array to display to the user the active word in a progressive manner
    let displayWord = [];
    //Creating an empty array to hold the letters the player have guessed
    let displayGuess = [];
    //Initializing variable to six (i. e. head, body, left arm, right arm, left leg, and right leg)
    let remainingGuess = 7;
    //Setting initial value for the win and lose counters
    let winCounter = 0;
    let loseCounter = 0;
    //Computer pick a random word
    let chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log(chosenWord);

    //Function to reset all global variables
    function resetVar() {
      correctWord = [];
      displayWord = [];
      displayGuess = [];
      remainingGuess = 7;
      chosenWord = words[Math.floor(Math.random() * words.length)];
    }

    function runGame() {
      //Initialize the displayWord array with underscore in each index, then pass it to #underScores in index.html
      for (let i = 0; i < chosenWord.length; i++) {
      displayWord[i] = "_";
      }
      document.getElementById("underScores").textContent = displayWord.join(" ");

      //Create an array to hold all the letters from the chosen word in its own index
      correctWord = [];
      for (let r = 0; r < chosenWord.length; r++) {
        correctWord.push(chosenWord.charAt(r));
      }
      console.log(chosenWord);
      //Clearing the characters that have already been guessed and replace it with its default text.
      document.getElementById("guessedChar").textContent = "Characters Already Guessed";
      //Setting the Remaining Guess back to its default value of 7
      document.getElementById("remainingGuess").textContent = remainingGuess;
    }

    //Initialize the displayWord array with underscore in each index, then pass it to #underScores in index.html
    for (let i = 0; i < chosenWord.length; i++) {
      displayWord[i] = "_";
      }
      document.getElementById("underScores").textContent = displayWord.join(" ");
    
    //After the DOM is ready, set Remaining Guess to its default value of 7
    document.getElementById("remainingGuess").textContent = remainingGuess;

    //Create an array to hold all the letters from the chosen word in its own index
    correctWord = [];
    for (let r = 0; r < chosenWord.length; r++) {
      correctWord.push(chosenWord.charAt(r));
    }
    console.log(correctWord);

    //Adding event listener to listen for a keypress.  Once the key is pressed, record the key as a string into a variable called key.
    document.addEventListener("keypress", (event) => {
      let key = String.fromCharCode(event.keyCode);
      console.log(key);
      //Run though the length of the word that has been picked by the random number generator.
      //If the key matches the character at an index, then replace that index (previously an underscore) with the letter inside the key variable.
      for (let k = 0; k < chosenWord.length; k++) {
        if (chosenWord.charAt(k) == key) {
          displayWord[k] = key;
          console.log(displayWord);
          document.getElementById("underScores").textContent = displayWord.join(" ");
        }
      }
      //If the key doesn't match any character inside the chosen word, then add the character into a pool consisting of characters that have already been guessed.
      //Reduces remaining guesses by 1.
      if (chosenWord.indexOf(key) === -1) {
        displayGuess.push(key);
        document.getElementById("guessedChar").textContent = displayGuess.join(" ");
        remainingGuess--;
        document.getElementById("remainingGuess").textContent = remainingGuess;
        if (remainingGuess < 1) {
          loseCounter++;
          document.getElementById("loseTracker").textContent = loseCounter;
          alert("You lose!");
          resetVar();
          runGame();
        }
      }
      if (JSON.stringify(displayWord) === JSON.stringify(correctWord)) {
        winCounter++;
        document.getElementById("winTracker").textContent = winCounter;
        alert("You win!");
        resetVar();
        runGame();
      }
    });
  });

  