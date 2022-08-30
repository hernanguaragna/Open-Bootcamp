//Bifurcaciones if...else...

let saldo = 50;
let efectivo = 100;



if(efectivo < saldo){
    console.log("puedes sacar dinero")
}else{
    console.log("no puedes sacar dinero")
}

// if else + if else

let nota = 5;

if (nota===5){
    console.log("felicitaciones sacaste el mayor puntaje")
} else if (nota===4){
    console.log("lo podrias haber hecho mejor")
}else if (nota===3){
    console.log("aprobaste justo")
}else if (nota===2){
    console.log("desaprobaste pero por poco")
}else if (nota===1){
    console.log("desaprobaste")
}else{
    console.log("error, introduce una nota entre el 1 y el 5");
};

//switch
let notaSwich = 6;
 switch (notaSwich) {
    case 5:
        console.log("felicitaciones sacaste el mayor puntaje")
        break;
    case 4:
        console.log("lo podrias haber hecho mejor")
        break;
    case 3:
        console.log("aprobaste justo")
        break;
    case 2:
        console.log("desaprobaste pero por poco")
        break;
    case 1:
        console.log("desaprobaste")
        break;

 
    default:
        console.log("error, introduce una nota entre el 1 y el 5");
        break;
 }
