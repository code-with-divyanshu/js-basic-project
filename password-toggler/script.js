let password = document.querySelector("#password");
let eyeicon = document.querySelector("#eyeicon");


eyeicon.addEventListener("click", ()=>{
	if(password.type == "password"){
		password.type = "text";
		eyeicon.src = "eye-open.png"; 
	}
	else{
		password.type = "password";
		eyeicon.src = "eye-close.png";
	}
});