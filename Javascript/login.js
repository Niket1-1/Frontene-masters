function login(){
    var email=document.getElementById("entermail").value;
    var pass=document.getElementById("enterpassword").value;
    
    var emails=localStorage.getItem("emailid")
    var password=localStorage.getItem("passwords")
   
    console.log(emails,password)
    if(emails==email&&password==pass){
        window.location.href="courses.html"
    
    }else{
        var p=document.getElementById('error')
        p.innerText="Wrong Credentials"
        p.style.color="red"
    }
}
