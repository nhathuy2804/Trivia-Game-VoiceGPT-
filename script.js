<script>
  function checkAnswer() {
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    if (q1 == "Paris" && q2 == "Berlin" && q3 == "Rome") {
      alert("You got all the answers correct!");
    } else {
      alert("One or more of your answers is incorrect. Please try again.");
    }
  }
</script>