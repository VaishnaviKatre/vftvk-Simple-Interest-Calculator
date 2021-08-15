function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("interest rate").value); 
    var years = parseFloat(document.getElementById("years").value);
    var interest = principal * years * rate /100;  
    var year = new Date().getFullYear()+parseInt(years);  
    
    var interest= document.getElementById("interest").innerHTML
    document.getElementById("interest").innerHTML="If you deposit<mark> "+principal+"</mark>,<br\>+at an interest rate of<mark> "+rate+"</mark>,<br\>+You will receive an amount of <mark>"+amount+"</mark>,<br\>+in the year<mark> "+year+"</mark>,<br\>"

}
  
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
