var form=document.querySelector('#form');
var username=document.querySelector('#username');
var email=document.querySelector('#email');
var subject=document.querySelector('#subject');
var textarea=document.querySelector('#textarea')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
})

function validate() {
    var usernameval=username.value.trim();
    var emailVal=email.value.trim();
    var subjectval=subject.value.trim();
    var textareaval=textarea.value.trim();

    if (usernameval==="") {
        seterror(username,'username request')
    }
    else{
        setSuccess(username)
    }
    if (emailVal==="") {
        seterror(email,'email request')
    }
    else{
        setSuccess(email)
    }
    if (subjectval==="") {
seterror(subject,'subject request')
    }
    else{
        setSuccess(subject)
    }

    if (textareaval==="") {
        seterror(textarea,'pls enter the message')
    }
    else{
        setSuccess(textarea)
    }

    if (usernameval!=="" && passwordval!=="" &&  subjectval!=="" && textareaval!=="") {
        alert('success')
    }
}

function seterror(eement,message) {
    // const errorElement = inputGroup.querySelector('.error')
    const inputGroup = eement.parentElement;
    const errorElement = inputGroup.querySelector('.error')
 
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}