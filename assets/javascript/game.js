//Load Javascript after the DOM has been loaded. If this is working, you'd see 'Live reload enabled.' in the console.
document.addEventListener("DOMContentLoaded", function(event) { 
    //Array with all the words
    var words = ["container","container-fluid", "row", "row-no-gutters", "col","active", "danger", "info", "success", "warning", "affix", "alert", "alert-dismissible", "alert-link", "breadcrumb", "btn", "btn-block", "btn-group", "btn-group-justified", "btn-group-vertical", "btn-info", "btn-link", "btn-success", "btn-warning", "caption", "caret", "carousel", "carousel-caption", "carousel-control", "carousel-indicators", "carousel-inner", "item", "left", "right", "next", "prev", "center-block", "checkbox", "checkbox-inline", "clearfix", "close", "collapse", "control-label", "divider", "dropdown", "dropdown-header", "dropdown-menu", "dropdown-menu-right", "embed-responsive", "embed-responsive-item", "dropdown-toggle", "form-control", "form-group", "form-horizontal", "glyphicon", "has-danger", "has-success", "had-warning", "help-block", "hidden", "show", "invisible", "icon-bar", "icon-next", "icon-prev", "img-circle", "img-responsive", "img-rounded", "img-thumbnail", "in", "input-group", "input-group-addon", "input-group-btn", "jumbotron", "label", "label-danger", "label-info", "label-success", "label-warning", "lead", "list-group", "list-group-item", "list-group-item-heading", "item-group-item-text", "list-inline", "list-unstyled", "mark", "media", "media-body", "media-left", "media-right", "media-heading", "media-list", "media-object", "modal", "modal-body", "modal-content", "modal-dialog", "modal-footer", "modal-header", "modal-lg", "modal-open", "modal-sm", "modal-title", "nav", "nav-justified", "nav-stacked", "nav-tabs", "navbar", "navbar-brand", "navbar-btn", "navbar-collapse", "navbar-fixed-bottom", "navbar-fixed-top", "navbar-form", "navbar-header", "navbar-default", "navbar-inverse", "navbar-left", "navbar-right", "navbar-link", "navbar-text", "navbar-toggle", "navbar-nav", "nav-tabs", "nav-pills", "page-header", "pager", "pagination", "pagination-lg", "pagination-sm", "previous", "next", "panel", "panel-group", "panel-body", "panel-collapse", "panel-title", "panel-heading", "panel-footer", "popover", "pre-scrollable", "progress", "progress-bar", "progress-bar-striped", "pull-left", "pull-right", "small", "sr-only", "sr-only-focusable", "tab-content", "tab-pane", "table", "table-bordered", "table-condensed", "table-hover", "table-responsive", "text-uppercase", "text-lowercase", "text-hide", "text-muted", "text-center", "text-left", "text-right", "text-justify", "text-nowrap", "thumbnail", "tooltip", "well", "well-lg", "well-sm"];

    //Computer pick a random word
    var pickWord = words[Math.floor(Math.random() * words.length)];
    console.log(pickWord);

    //Create a variable and initialize it with underscore for each letter in the pickWord variable from above.
    var displayWord = [];
    for (var i = 0; i < pickWord.length; i++) {
      displayWord[i] = "_";
    }
    //Begin with displaying the array in #underScores
    document.getElementById("underScores").textContent = displayWord.join(" ");

    //Initializing variable to six (i. e. head, body, left arm, right arm, left leg, and right leg)
    var remainingGuess = 6;
    //Creating an empty array to hold the letters the player have guessed
    var displayGuess = ["trigger"];
    // Game
    document.addEventListener("keypress", (event) => {
      var key = String.fromCharCode(event.keyCode);
      console.log(key);

      for (var k = 0; k < pickWord.length; k++) {
        if (pickWord.charAt(k) == key) {
          displayWord[k] = key;
          console.log(displayWord);
          document.getElementById("underScores").textContent = displayWord.join(" ");
          if (k == (pickWord.length - 1)) {
            
          }
        }
      }
    });

    var winCounter = 0;
    var loseCounter = 0;
  });

  