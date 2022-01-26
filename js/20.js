//metodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log("Reproducionedo cancion con el id: " + id);
    },
    pausar: function(){
        console.log("pausando...");
    },
    crearPlaylist: function(nombre){
        console.log("creando la play lista:" + nombre);
    },
    reproducirPlayList: function(nombre) {
        console.log("Reproducionedo la play list: " + nombre)
    }
}

reproductor.borrarCancion = function(id) {
    console.log("eliminando la cancion: " + id);
}

reproductor.reproducir(3333);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("     POST MALONE");
reproductor.reproducirPlayList("post malone");