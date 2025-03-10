/*
    Author: Kathia Graciano
    Date Created: February 6, 2025
    Date last edited: March 9, 2025
    Version: 1.0
    Description: JavaScript for hw 2
*/
/*/ From profjake's hw3 */

//get date on page
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//slider
let slider = document.getElementById("range"); 
let output = document.getElementById("slider"); 
output.innerHTML = slider.value; 

slider.oninput = function ()
{
    output.innerHTML = this.value; 
}

//validate first name
function validateFname()
{
    const fname = document.getElementById("fname").value; 
    const fnameR = /^[a-zA-Z']+$/;//sets parameters for first name

    if(fname.length == 0)//gives error if the first name is blank 
    { 
        document.getElementById("fnameError").innerHTML = 
            "First Name can't be blank";
            return false; 
    }
    else if(!fnameR.test(fname))//gives error if the first name is not within parameters
        { 
            document.getElementById("fnameError").innerHTML = 
                "Invalid First Name, only use letters, apostrophes, and dashes"; 
                return false; 
        }
        else //if valid, no error message
        {   
            document.getElementById("fnameError").innerHTML = "";
                return true; 
        }
}
//validate middle initial 
function validateMInitial()
{ 
    const minitial = document.getElementById("minitial").value;
    const minitialR = /^[a-zA-Z]+$/; //sets parameters for middle initial

    if(!minitialR.test(minitial))//shows error if middle initial is not within parameters
    { 
        document.getElementById("minitialError").innerHTML = 
            "Invalid Middle Initial, only include letters"; 
            return false; 
    }
    else//if valid, no error message
    {
        document.getElementById("minitialError").innerHTML = ""; 
        return true; 
    }
}
//validate last name 
function validateLname()
{
    const lname = document.getElementById("lname").value;
    const lnameR = /^[a-zA-Z']+$/; //sets parameters for last name

    if(lname.length == 0)//shows error if last name is blank
        { 
            document.getElementById("lnameError").innerHTML = 
                "Last Name can't be blank";
                return false; 
        }
    else if(!lnameR.test(lname))//shows error if last name is not within parameters
        { 
            document.getElementById("lnameError").innerHTML = 
                "Invalid Last Name, only include letters, apostrophes, and dashes"; 
                return false; 
        }
        else//if valid, no error message
        {
            document.getElementById("lnameError").innerHTML = ""; 
                return true; 
        }
}
//validate date of birth
function validateDob()
{
    dob = document.getElementById("dob");
    let date = new Date(dob.value);//gets date from input
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);//sets max date as 120 years ago

    if (date > new Date())//shows error if date is in the future
    {
        document.getElementById("dobError").innerHTML = 
            "Date can't be in the future";
            dob.value = "";
            return false; 
    }
    else if (date < new Date(maxDate))//show error if date is more than 120 years ago
        {
            document.getElementById("dobError").innerHTML = 
                "Date can't be more than 120 years ago";
                dob.value = "";
                return false; 
        }
        else //if valid, no error message
        {
            document.getElementById("dobError").innerHTML = "";
                return true;
        }
}
//validate Social Security Number
function validateSsn() 
{
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;//set parameters for SSN

    if (ssn.length == 0)//show error if SSN is blank
    {
        document.getElementById("ssnError").innerHTML = 
            "Please enter your ssn";
            return false;
    }
    else if (!ssnR.test(ssn))//show error if SSN is not within parameters
        {
            document.getElementById("ssnError").innerHTML = 
                "Please enter a valid SSN";
                return false;
        } 
        else //if valid, no error message
        {
            document.getElementById("ssnError").innerHTML = "";
                return true;
        }
}
//validate Address 1
function validateAddress1()
{
    const address1 = document.getElementById("address1").value;

    if (address1.length == 0)//show error if address is blank
    {
        document.getElementById("address1Error").innerHTML = 
            "Please enter your address";
            return false;
    }
    else//if valid, no error message
    {
        document.getElementById("address1Error").innerHTML = "";
            return true;
    }
}
//validate City
function validateCity()
{
    const city = document.getElementById("city").value;

    if (city.length == 0)//show error if city is blank
    {
        document.getElementById("cityError").innerHTML = 
            "Please enter your city";
            return false;
    }
    else//if valid, no error message
    {
        document.getElementById("cityError").innerHTML = "";
            return true;
    }
}
//validate State 
function validateState()//was not able to make the drop list an inclusion
{
    const state = document.getElementById("state").value;

    if (state.length == 0)//show error is state is blank
    {
        document.getElementById("stateError").innerHTML = 
            "Please select a state";
            return false;
    }   
    else//if valid, no error message
    {
        document.getElementById("stateError").innerHTML = "";
            return true;
    }
}
//validate phone Zipcode
function validateZipcode()
{
    const zipInput = document.getElementById("zipcode"); //gets zip code input
    let zip = zipInput.value.replace(/[^\d-]/g, "");//removes any characters that are not numbers or dashes

    if (zip.length == 0) //show error if zip is blank
    {
        document.getElementById("zipcodeError").innerHTML = 
            "Please enter your zip code";
            return false;
    }
    else if (zip.length > 5)//replaces zip code with a dash if it is longer than 5 characters
        {
            zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
        }
        else //if valid, keeps zip code with 5 characters
        {
            zip = zip.slice(0, 5); 
        }
    zipInput.value = zip; //sets the value of the zip code input to the new zip code
    document.getElementById("zipcodeError").innerHTML = "";
    return true; 
}
//validate Phone Number 
function validatePhone()   
{   
    phone = document.getElementById("phone").value;
    let regex = /^[()0-9-]+$/;//sets parameters of phone number

    if (phone.length == 0)//show error if phone number is blank
    {
        document.getElementById("phoneError").innerHTML = 
            "Please enter your phone number";
            return false;
    }
    else if (!regex.test(phone))//show error if phone number is not within parameters
        {
            document.getElementById("phoneError").innerHTML = 
                "Your phone number can only include numbers, parentheses, and dashes";
                return false;
        }
        else //if valid, no error message
        {
            document.getElementById("phoneError").innerHTML = "";
                return true;
        } 
}
//validate Email
function validateEmail()
{
    const email = document.getElementById("email").value;
    const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//sets parameters for email

    if (email.length == 0)//show error if email is blank
    {
        document.getElementById("emailError").innerHTML = 
        "Please enter your email";
        return false;
    }
    else if (!emailR.test(email))//show error if email is not within parameters
        {
            document.getElementById("emailError").innerHTML = 
            "Please enter a valid email";
            return false;
        } 
        else //if valid, no error message
        {
            document.getElementById("emailError").innerHTML = "";
            return true;
        }
}
//validate Username 
function validateUser() 
{
    const user = document.getElementById("user").value.toLowerCase();
    let regex = /^[a-zA-Z0-9_-]+$/;//sets parameters for username

    if (user.length == 0)//show error if username is blank
    {
        document.getElementById("userError").innerHTML = 
            "Please enter your username";
            return false;
    }
    else if (!isNaN(user.charAt(0)))//show error if username begins with a number
        {
            document.getElementById("userError").innerHTML = 
                "Invalid, your username cannot begin with a number";
                return false;
        }
        else if (user.includes(" ")) //show error if username contains a space
            {
            document.getElementById("userError").innerHTML = 
                "Invalid, your username cannot contain spaces";
                return false;
            }
            else if (!regex.test(user))//show error if username is not within parameters
                {
                    document.getElementById("userError").innerHTML = 
                        "Invalid, username can only include letters, numbers, underscores, and dashes";
                        return false;
                } 
                else if (user.length < 5)//show error if username is less than 5 characters
                    {
                        document.getElementById("userError").innerHTML = 
                            "Your username must include at least 5 characters";
                            return false;
                    } 
                    else if (user.length > 30) //show error if username is more than 30 characters 
                        {
                            document.getElementById("userError").innerHTML = 
                                "Your username must not exceed 30 characters";
                                return false;
                        } 
                        else //if valid, no error message
                            {
                                document.getElementById("userError").innerHTML = "&#x2705";
                                    return true;
                            }
}
//validate password 
function validatePword()
{
    const pword = document.getElementById("pword").value;//gets password input

    if (pword.length == 0)//show error if password is blank
    {
        document.getElementById("pwordError").innerHTML = 
            "Please enter your password";
            return false;
    }
    else if (pword.includes(user))//show error if password includes username
        {
            document.getElementById("pwordError").innerHTML = 
                "Invalid, your password cannot include your username";
                return false;
        }
        else if (!pword.match(/[A-Z]/))//show error if password does not include a capital letter
            {
                document.getElementById("pwordError").innerHTML = 
                    "Please include at least one uppercase letter";
                    return false;
            }
            else if (!pword.match(/[a-z]/))//show error if password does not include a lowercase letter
                {
                    document.getElementById("pwordError").innerHTML = 
                        "Please include at least one lowercase letter";
                        return false;
                }
                else if (!pword.match(/[0-9]/))//shows error if password does not include a number
                    {
                        document.getElementById("pwordError").innerHTML = 
                            "Please include at least one number";
                            return false;
                    }
                    else if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/))//show error if password does not include a special character
                        {
                            document.getElementById("pwordError").innerHTML = 
                                "Please include at least one special character";
                                return false;
                        }
                        else if (pword.length < 8)//shows error if password is less than 8 characters
                            {
                                document.getElementById("pwordError").innerHTML = 
                                    "Your username must include at least 8 characters";
                                    return false;
                            } 
                            else if (pword.length > 30)//shows error if password is more than 30 characters
                                {
                                    document.getElementById("pwordError").innerHTML = 
                                        "Your username must not exceed 30 characters";
                                        return false;
                                } 
                                else //if valid, no error message 
                                {
                                    document.getElementById("pwordError").innerHTML = "&#x2705";
                                        return true;
                                }
}
//validate confirm password 
function confirmPword() 
{
    const pword1 = document.getElementById("pword").value;//gets password input
    const pword2 = document.getElementById("pword2").value;//gets confirm password input

    if (pword1 !== pword2)//shows error if passwords do not match
        {
        document.getElementById("pword2Error").innerHTML = 
            "Please make sure your passwords match";
            return false;
        } 
    else//once passwords match, confirmation message
        {
        document.getElementById("pword2Error").innerHTML = 
            "&#x2705";
            return true;
        }
}
//review final input button
function reviewInput()
{
    var formcontent = document.getElementById("signup");//gets form content
    var formoutput = "<table class='output'><th colspan = '3'> Please Review Your Information:</th>";//creates table for review
    var i;//variable for loop
    for (let i = 0; i < formcontent.length; i++) //loop to get all input values
    {
        if (formcontent.elements[i].value !== "") //if input is not blank
        {
            switch (formcontent.elements[i].type) //gets input values based on type
            {
                case "checkbox":
                    if (formcontent.elements[i].checked) //works on checkboxes if theyre checked
                    {
                        formoutput += "<tr><td align='right'>"+formcontent.elements[i].value+"</td>";
                        formoutput += "<td class='outputdata'></td></tr>";
                    }
                    break;
                case "radio"://works on radio buttons if theyre checked
                    if (formcontent.elements[i].checked) 
                    {
                        formoutput += "<tr><td align='right'>"+formcontent.elements[i].name+"</td>";
                        formoutput += "<td class='outputdata'>"+ formcontent.elements[i].value+"</td></tr>";
                    }
                    break;
                case "button": case "submit": case "reset":
                    break;
                default://works on all other inputs
                    formoutput += "<tr><td align='right'>"+formcontent.elements[i].name+"</td>";
                    formoutput += "<td class='outputdata'>"+ formcontent.elements[i].value+"</td></tr>";
            }
        }
    }
    formoutput += "</table>";//close table
    document.getElementById("showInput").innerHTML = formoutput;//displays review
}
function removeReview() //clears review
{
    document.getElementById("showInput").innerHTML = "(You started over)";//confirmation
}
