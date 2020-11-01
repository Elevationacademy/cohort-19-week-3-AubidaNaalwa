const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}


const checkReservation = document.getElementById("checkReservation");
checkReservation.onclick = function () {
    let name = document.getElementById("name");
    let tag = document.createElement("p");
if(reservations[name.value] !== undefined && !reservations[name.value].claimed){
tag.innerText =` welcome, ${name.value}`
}
else if(reservations[name.value] !== undefined && reservations[name.value].claimed){
    tag.innerText =`Hmm, someone already claimed this reservation`
    }else{

        tag.innerText =`You have no reservation`

    }
document.getElementById("answer").appendChild(tag)

}

