console.log("sayantan");
const mediaquery = window.matchMedia('(max-width: 800px)')

function validatefirstname() {

	let Name = document.getElementById('firstname').value;
	if (Name == '' || Name.length < 3)
	{
		document.getElementById("firstname").style.borderColor = "red";
		if(mediaquery.matches){
			document.getElementById("errfirst").style.display="inline";
			document.getElementById("errfirst").style.visibility="visible";
			// document.getElementById('errfirst').innerHTML="*First name must contain at least 3 characters";
		}
		else{
		document.getElementById("errfirstname").style.visibility="visible";
		document.getElementById("errfirstname").innerHTML="First name must contain at least 3 characters";
		}
		return false;
	}
	else {
		document.getElementById("firstname").style.borderColor = "rgb(69, 255, 69)";
		if(mediaquery.matches){
			document.getElementById("errfirst").style.visibility="hidden";
			document.getElementById("errfirst").style.display="none";
		}
		else{
		document.getElementById("errfirstname").style.visibility="hidden";
		}
		return true;
	}
}


function validatelastname() {
	let Name = document.getElementById('lastname').value;
	if (Name == '' || Name.length < 3) {
		document.getElementById("lastname").style.borderColor = "red";
		if(mediaquery.matches){
			document.getElementById("errlast").style.display="inline";
			document.getElementById("errlast").style.visibility="visible";
			// document.getElementById('errlast').innerHTML="*Last name must contain at least 3 characters";
		}
		else{
		document.getElementById("errlastname").style.visibility="visible";
		document.getElementById("errlastname").innerHTML="Last name must contain at least 3 characters"
		}
		return false;
	}
	else {
		document.getElementById("lastname").style.borderColor = "rgb(69, 255, 69)";
		if(mediaquery.matches){
			document.getElementById("errlast").style.visibility="hidden";
			document.getElementById("errlast").style.display="none";
		}
		else{
		document.getElementById("errlastname").style.visibility="hidden";
		}
		return true;
	}
}

function confirmpassword() {
	let pass1 = document.getElementById('password').value;
	let pass2 = document.getElementById('cpassword').value;
	if (pass1 == pass2 && pass1 != '' && pass2 != '') {
		// document.getElementById("password").style.borderColor = "rgb(69, 255, 69)";
		document.getElementById("cpassword").style.borderColor = "rgb(69, 255, 69)";
		if(mediaquery.matches){
			document.getElementById("errpass").style.visibility="hidden";
			document.getElementById("errpass").style.display="none";

		}
		else{
		document.getElementById("errpassword").style.visibility="hidden";
		}
		return true;
	}
	else {
		// document.getElementById("password").style.borderColor = "red";
		document.getElementById("cpassword").style.borderColor = "red";
		if(mediaquery.matches){
			document.getElementById("errpass").style.display="inline";
			document.getElementById("errpass").style.visibility="visible";
			// document.getElementById('errpass').innerHTML="*Password does not match";
		}
		else{
		document.getElementById("errpassword").style.visibility="visible";
		document.getElementById("errpassword").innerHTML="Password does not match";
		}
		return false;
	}
}


function checkpassword() {

	let pass = document.getElementById('password').value;
	let per = pass.length * 8;
	if (pass.length < 6) {
		document.getElementById('password').style.background = "linear-gradient(to right, #ff6161 " + per + "%, white " + per + "%)";
		document.getElementById('s').innerHTML = "  (Poor)";
	}

	if (pass.length >= 6 && pass.length <= 12) {
		document.getElementById('password').style.background = "linear-gradient(to right, #ffa84e " + per + "%, white " + per + "%)";
		document.getElementById('s').innerHTML = "  (Medium)";
	}

	if (pass.length > 12) {
		document.getElementById('password').style.background = "linear-gradient(to right,green " + per + "%, white " + per + "%)";
		document.getElementById('s').innerHTML = "  (Strong)";
	}

	if (pass.length == '') {
		document.getElementById('password').style.background = "linear-gradient(to right,white " + per + "%,white " + per + "%)";
		document.getElementById('s').innerHTML = "";
	}
}


function showpassword() {
	let t = document.getElementById('password').type;
	if (t === "text") {
		document.getElementById('password').type = "password";
		document.getElementById('cpassword').type = "password";
		document.getElementById('eye').innerHTML = '<i class="far fa-eye"></i>';
	}
	else {
		document.getElementById('password').type = "text";
		document.getElementById('cpassword').type = "text";
		document.getElementById('eye').innerHTML = '<i class="far fa-eye-slash"></i>';
	}
}

function mnumber() {
	let num = document.getElementById('mobile').value;
	if (num.match(/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/)) {
		document.getElementById("mobile").style.borderColor = "rgb(69, 255, 69)";
		if(mediaquery.matches){
			document.getElementById("errmob").style.visibility="hidden";
			document.getElementById("errmob").style.display="none";

		}
		else{
		document.getElementById("errmobile").style.visibility="hidden";
		}
		return true;
	}
	else {
		document.getElementById("mobile").style.borderColor = "red";
		if(mediaquery.matches){
			document.getElementById("errmob").style.visibility="visible";
			document.getElementById("errmob").style.display="inline";
			// document.getElementById('errmob').innerHTML="*Invalid mobile number";
		}
		else{
		document.getElementById("errmobile").style.visibility="visible";
		document.getElementById("errmobile").innerHTML="Incorrect mobile number";
		}
		return false;
	}
}

function validateemail(){
	let val=document.getElementById("email").value;
	if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
	{
		document.getElementById("email").style.borderColor = "rgb(69, 255, 69)";
		if(mediaquery.matches){
			document.getElementById("errmail").style.visibility="hidden";
			document.getElementById("errmail").style.display="none";
		}
		else{
		document.getElementById("erremail").style.visibility="hidden";
		}
		return true;
	}
	else{
		document.getElementById("email").style.borderColor = "red";
		if(mediaquery.matches){
			document.getElementById("errmail").style.visibility="visible";
			document.getElementById("errmail").style.display="inline";
			// document.getElementById('errmail').innerHTML="*Invalid Email";
		}
		else{
		document.getElementById("erremail").style.visibility="visible";
		document.getElementById("erremail").innerHTML="Incorrect E-mail";
		}
		return false;
	}
}

function validatesubmit()
{
	if(validatefirstname() && validatelastname() && confirmpassword() && mnumber() && validateemail())
	{
		return true;
	}
	else{
		alert("Fill all the fields Correctly");
		return false;
	}
}