// document hace referencia a todo el html que tenomos 

 const boton = document.querySelector("#boton");

 boton.addEventListener("click", function(){
    Notification.requestPermission()
    .then(resultado => console.log("El resultado es: "+ resultado));
 });


 if(Notification.permission == "granted"){
     new Notification("Ets es una notificacion: ", {
         icon: "img/",
         body: "Codigo JDS "
     })
 }