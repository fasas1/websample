

// EVENT LISTENER
document.getElementById('firstName').addEventListener('blur', validateFirstName);
document.getElementById('lastName').addEventListener('blur', validateLastName);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('telephone').addEventListener('blur', validatePhone);
document.getElementById('email').addEventListener('blur', validateEmail);

	// validation for firstname
 function validateFirstName(){
		 const firstName = document.getElementById('firstName');
		 const regex = /^[a-zA-Z\'\-]{3,15}$/;

		  if (regex.test(firstName.value)){
				 firstName.className = 'valid';
			}else {
				 firstName.className = 'invalid';
			}
 }
// validation for lastname
 function validateLastName(){
	const lastName = document.getElementById('lastName');
	const regex = /^[a-zA-Z\'\-]{3,15}$/;

	 if (regex.test(lastName.value)){
			lastName.className = 'valid';
	 }else {
			lastName.className = 'invalid';
	 }
}
// validation for password
function validatePassword(){
	const password = document.getElementById('password');
	const regex = /^[\w@-]{8,19}$/;

	 if (regex.test(password.value)){
			password.className = 'valid';
	 }else {
			password.className = 'invalid';
	 }
}
// validation for phone
function validatePhone(){
	const password = document.getElementById('telephone');
	const regex = /^\d{11}$/;

	 if (regex.test(telephone.value)){
			telephone.className = 'valid';
	 }else {
			telephone.className = 'invalid';
	 }
}
// validation for email
function validateEmail(){
	const email = document.getElementById('email');
	const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/
	
	   if (regex.test(email.value)) {
			  email.className = 'valid';
		 } else{
			  email.className = 'invalid';
		 }
	}	 




