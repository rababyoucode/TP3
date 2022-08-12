let date = new Date();
document.getElementById("pp").innerHTML="Bonjour la date est:" +date.toLocaleDateString();

document.getElementById("yr").innertext= "l'annee est "+ date.getFullYear();
/*function validateForm() {
    let valname = document.forms["myForm"]["fname"].value;
    if (valname == "") {
      alert("Veuillez entre votre nom");
      return false;
    }
  }*/
function validateForm(){
        valname = document.getElementById("fname").value;
        valprenom = document.getElementById("lname").value;
        valcode = document.getElementById("code").value;
        valpaye = document.getElementById("paye").value;
        valgenre = document.getElementById("genre").value;
        valprefcont = document.getElementById("pf").value;
        valmail = document.getElementById("mail").value;
        valpass = document.getElementById("passw").value;
        valvpass = document.getElementById("vpass").value;
        if(valname == " "){
        alert("Veuillez entre votre nom");
        }
        if(valprenom == " "){
            alert("Veuillez entre votre nom");
        }
        if(valcode == " "){
            alert("Veuillez entre votre nom");
        }
        if(valpaye == " "){
            alert("Veuillez entre votre nom");
        }  
        }
 
    
