// function myFunction(){
//     alert("Thanks for Submitting"+"\n"+"Your Application has been Successfully Submitted !!! ");
// }

function validateForm() {  
    //collect form data in JavaScript variables  
    var pw1 = document.getElementById("pswd1").value;  
    var pw2 = document.getElementById("pswd2").value;  
    var validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

       
    if((pw1.length > 8) && (pw1.length < 15) && pw1.match(validation) && (pw1 == pw2) ) 
    {   
      alert("Account created successfully")
      return true;  
    }  
    else{
      alert("Password should be 8 to 15 characters long with One Uppercase, One Lowercase and a Number")
      return false;
    }
  
    
   

 }  