/******* login validation*******/ 

function login_validate()
{
    let login_email = document.getElementById("email");
    let login_pwd= document.getElementById("pwd");
    let email_id = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if ( login_email .value != '' &&   login_pwd.value != '') 
    {
        if (email_id.test(login_email.value))
        {
            alert("Login Successfull");
            return true;
        } 
        else 
        {
            alert("Email Id is invalid");
            login_email.focus();
            return false;
        }
    }
    else 
    {
        alert("All fields are mandatory..");
        return false;
    }
}

/*******  signup form validation *******/ 

function validate() 
{  
  let username = document.getElementById("username")
  let email=document.getElementById("email");
  let mob_no=document.getElementById("mob_no");
  let Password =document.getElementById("password");
  let Confirm_password = document.getElementById("confirm_password");
  let email_error=document.getElementById("email_error");
  let mob_error=document.getElementById("mob_error");
  let email_id = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
  let Phone_no  =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let password_check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  
  if ( username.value!='' && email.value != '' && mob_no.value != '' && Password.value != '' && Confirm_password.value !='')
   {
        if (email_id.test(email.value)) 
        {
            email_error.innerHTML = " ";
            email_error.style.color ="none";
            document.getElementById('email').style.removeProperty('border');
            if (Phone_no.test(mob_no.value)) 
            {
                mob_error.innerHTML = "";
                mob_error.style.color ="none";
                document.getElementById('mob_no').style.removeProperty('border');
                if(password_check.test(Password.value))
                {
                    if(Password.value == Confirm_password.value )
                    {
                        alert("Successfully registered..");
                        return true;
                    } 
                    else
                    {
                        alert("Passwords Doesnt Match, Please Re-enter :");
                        Confirm_password.value="";
                        return false;
                       
                    }
                }
                else
                {
                    alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
                    Password.focus();
                    return false;
                }
            }
            else
            {
                mob_error.innerHTML = "Phone number is invalid";
                mob_error.style.color ="red";
                mob_no.style.borderColor ="red";
                return false;
            }

        } 
        else
        {
            email_error.innerHTML = "Email is invalid";
            email_error.style.color ="red";
            email.style.borderColor ="red";
            return false;
        }
    }
    else 
    {
        alert("Fill all mandatory fields...");     
        return false;
    } 
}

function email_check()
{
    let email=document.getElementById("email");
    let email_id = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let email_error=document.getElementById("email_error");
    if (email_id.test(email.value)) 
    {
        email_error.innerHTML = " ";
        email_error.style.color ="none";
        document.getElementById('email').style.removeProperty('border');
    }
    else
    {
        email_error.innerHTML = "Email is invalid";
        email_error.style.color ="red";
        email.style.borderColor ="red";
    }
}
function ph_check()
{
    let mob_no=document.getElementById("mob_no");
    let Phone_no  =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let mob_error=document.getElementById("mob_error");
    if (Phone_no.test(mob_no.value)) 
    {
        mob_error.innerHTML = "";
        mob_error.style.color ="none";
        document.getElementById('mob_no').style.removeProperty('border');
    }
    else
    {
        mob_error.innerHTML = "Phone number is invalid";
        mob_error.style.color ="red";
        mob_no.style.borderColor ="red";
    }

}

/*******  password strength checking *******/ 

function Pwd_Strength_Check()
 {
    let Password_value = document.getElementById("password");
    let strength = document.getElementById('Strength');
    let strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    let mediumPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.{4,6})/;

    if(strongPassword.test(Password_value.value))
    {
        strength.style.backgroundColor = "green";
        strength.textContent = 'Strong';
    }

    else if(mediumPassword.test(Password_value.value))
    {
        strength.style.backgroundColor = 'orange';
        strength.textContent = 'Medium';
    } 

    else
    {
        strength.style.backgroundColor = 'red';
        strength.textContent = 'Poor';
    }
}



//
// 



       function check() {
        if (document.getElementById('password').value ==
          document.getElementById('confirm_password').value) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'matching';
        } else {
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'not matching';
        }
      }
      
     
  
 