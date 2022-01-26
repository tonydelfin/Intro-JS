//iteradores while for etc.

//for Loop

// for(let i=0;i<=10;i++){
//     console.log(i);
// }


// for(let i=1; i<=10; i++){
//     if(i %2 ==0){
//         console.log(i + " Es par");
//     }
//     else{
//         console.log(i + " Es inpar");
//     }
// }


 const carrito =[
     { nombre: "play", precio: 200},
     { nombre: "play1", precio: 201},
     { nombre: "play2", precio: 202},
     { nombre: "play3", precio: 203},
     { nombre: "play4", precio: 204},
     { nombre: "play5", precio: 205},
     { nombre: "play6", precio: 206},

 ];

// for(let i= 0;i< carrito.length; i++) {
//     console.log(i + carrito[i].nombre);
// }


// while loop

//  let i = 1;

// while(i<= 100){
//     if(i%2 === 0)
//     {
//         console.log(i + "Es par");
//     }
//     else{
//         console.log(i + " Es inpar");
//     }

//     i++;
// }

// while(i <= carrito.length){
//     console.log(carrito[i].nombre);
//     i++;
// }


///////ESTE SE S EJECUTA SI LA CONDICION NO SE CUMPLE

let i =100;

do{
    console.log(i);
    i++;
}while(i <10);

//////ESTE SE EJECUTA AL MENOS UNA VAZ Y DESPUES VE SI LA CONDICION SE CUMPLE
