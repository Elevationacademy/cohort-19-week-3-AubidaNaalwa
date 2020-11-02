let answer = document.getElementById("answer")
let form = document.getElementById("addingInfo")


 
let phone = document.getElementById("Phone")
let DesiredSalary = document.getElementById("ldesiredSalary")
let Birthday = document.getElementById("lBirthday")
let name = document.getElementById("fullname")

form.addEventListener('submit',function(event){
    let phone = document.getElementById("Phone")
    let DesiredSalary = document.getElementById("ldesiredSalary")
    let Birthday = document.getElementById("lBirthday")
    let name = document.getElementById("fullname")
    let val = parseInt(DesiredSalary.value,10)
   
    if(!name.value|| name.value.length > 2 || name.value.length  === 0){
      answer.innerHTML = "the name is not in range of 2 characters"
    }
    else if(!DesiredSalary.value || val < 10000 || val > 16000){
        answer.innerHTML = "Sorry pick your salry between 10K - 16K"
    }else if (!Birthday.value){
        answer.innerHTML = "select a Birthday date"
    }else if (!phone.value || phone.value.length !== 10){
        answer.innerHTML = "PhoneNumber is notz a 10 numbers"
    }else{
        answer.innerHTML = "Informations Submitted"
    }
    event.preventDefault()
    return

});