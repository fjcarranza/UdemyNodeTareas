const descripcion = {
    alias: 'd',
    demand: true,
    description: "Descripcion de la tarea por hacer"
};
const completado = {
    alias: 'c',
    demand: true,
    description: "Actualizar a completado o pendiente"
};


const argv = require('yargs')
    .command('crear', 'Crear una nueva actividad por hacer', descripcion)
    .command('borrar', 'Borrar una actividad creada', descripcion)
    .command('actualizar', 'Modifica el estado de una actividad', descripcion, completado)


.help()
    .argv


module.exports = {
    argv
}