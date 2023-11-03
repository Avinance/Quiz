function getResults() {
    // Correct Answers
    var amountCorrect = 0;
  
    // Loop for going through all questions
    for (var i = 1; i <= 5; i++) {
      var radiosName = document.getElementsByName('answer' + i);
  
      // Loop for checking answers inside each radio
      for (var j = 0; j < radiosName.length; j++) {
        var radiosValue = radiosName[j];
        if (radiosValue.value === "correct" && radiosValue.checked) {
          amountCorrect++;
          radiosValue.style.color = "green";
        }
      }
    }
  
    document.getElementById('results').innerHTML =
      "Correct Answers: " + amountCorrect;
  }
  