// hides the cards upon landing
document.getElementById('output').style.visibility='hidden';

// first we want to grab the input
document.getElementById("lbsInput").addEventListener("input", function(e) {
    document.getElementById('output').style.visibility='visible';
  // pass in an event parameter
  let lbs = e.target.value;
  // Next we want to target the different outputs and replace with the equivalent
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046; // this converts pounds to grams
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});
