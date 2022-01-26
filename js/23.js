//switch para varios casos

const metodoPago = "Cheque";

switch(metodoPago){
    case "Tarjet": 
        console.log("Pagaste con tarjeta");
    break;

    case "Cheque":
    console.log("Pagaste con cheque");
    break;

    default:
        console.log("aun no haz pagado");
        break;
}