const totalSeats = 120;
const bookedSeats = 78;

function checkAvailable(){
     const availableSeats = totalSeats-bookedSeats;
     console.log(availableSeats);
     if(availableSeats<20){
        console.log("almost full");
     }
     else if(availableSeats>=20 && availableSeats<=60){
        console.log("Moderate availability");
     }
     else{
        console.log("plenty of available seats")
     }
    }
    
checkAvailable()
