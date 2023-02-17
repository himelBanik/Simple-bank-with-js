document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
 

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if (password.length ===0 || email.length === 0){
        if(password.length === 0 && email.length === 0){
            alert("All fields are empty");
        }
        else if(email.length === 0){
            alert("Email cannot be empty");
        }
        else{
            alert("Password cannot be empty")
        }    
    }
    else{
        if (email === 'test@gmail.com' && password === '12345'){
            location.href ='bank.html';
        }
        else{
            alert('Invalid email or password');
        }
    }
})