
 /*
 function tips() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;  
    var each = document.getElementById('each');
      //validate input
  (billAmt === "" || serviceQual == 0) ? alert("Please enter values") : "";
  
  //Check to see if this input is empty or less than or equal to 1
  (numOfPeople === "" || numOfPeople <= 1) ? numOfPeople = 1 
    (each.style.display = "none") : each.style.display = "block";
  

  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  tips();

}

*/



const tips = () => {

    let bill = document.getElementById('billamt').value;
    let service = document.getElementById('serviceQual').value;
    let people = document.getElementById('peopleamt').value;
    let each = document.getElementById('each');

   (bill === '' || service == 0) ? alert('Please enter values') : "";
   
   (people <= 1) ? people = 1 : "";
    
    let total = (bill * service) / people;
    document.getElementById("tip").innerHTML = total;

}

document.getElementById('calculate').addEventListener('click', () => tips());