const { requiresArg, describe, argv } = require("yargs");
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log(comando);
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);

        //crearActividad();
        break;
    case "listar":
        console.log("Lista las tareas por hacer");
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log(
                colors.grey('=============='),
                colors.grey('Por Hacer'),
                colors.grey('==============')
            );
            console.log(tarea.descripcion);
            if (tarea.completado) {
                console.log("Estado:", colors.green(tarea.completado));
            } else {
                console.log("Estado:", colors.red(tarea.completado));
            }

            console.log("=======================================\n".grey);
        }
        break;
    case "actualizar":
        console.log("Cambiar el estado de la tarea: ", argv.d, ", a: ", argv.c, ".");
        let actualizar = porHacer.actualizar(argv.d, argv.c);
        //let actualizar = porHacer.actualizar(argv.described, argv.completado);

        break;
    case "borrar":
        console.log("Borra una tarea: ", argv.d, ".");
        let borrar = porHacer.borrar(argv.d);
        if (borrar) {
            console.log("Se borro el elemento");
        } else {
            console.log("No se pudo borrar el elemento");
        }
        break;
    default:
        console.log("Comando no reconocido");
        break;
}