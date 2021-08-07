var data_div=document.getElementById("parent")
function startlearning(){
    var emailtext=document.getElementById("emailtext").value;
    var password=document.getElementById("password").value;
    var data_div=document.getElementById("parent")
    var debitcard=document.getElementById("debitcard").value;
    var enterpassword=document.getElementById("password1").value;
    var cvv=document.getElementById("cardnumber").value;
    
    if(enterpassword==password&&emailtext!=""&&password!=""&&cvv.length==3&&debitcard.length==16){
    localStorage.setItem("emailid",emailtext)
    localStorage.setItem("passwords",password)
    localStorage.setItem("debitcards",debitcard)
    window.location.href="login.html"
    }
    if(password!=enterpassword||password==""||enterpassword==""){
       
       var p=document.getElementById('parent')
        p.innerText="Password didn't match"
        p.style.color="red"
    
    }
    if(cvv.length!=3){
       
        var p=document.getElementById('parent1')
         p.innerText="Enter valid cvv"
         p.style.color="red"
     
     }
     if(debitcard.length!=16){
       
        var p=document.getElementById('parent2')
         p.innerText="Enter valid card details"
         p.style.color="red"
     
     }

    
    
}


function joinnow(){
    window.location.href="joinnow.html"
}


src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
 
     function block2click(){

       let h=document.getElementById("plans")
       h.innerText="Register for a Yearly Account"




     }
     function block1click(){

let h=document.getElementById("plans")
h.innerText="Register for a Monthly Account"




}
function block3click(){

let h=document.getElementById("plans")
h.innerText="Register for a Monthly Team Account"




}
function block4click(){

let h=document.getElementById("plans")
h.innerText="Register for a Yearly Team Account"




}
    
  
    