require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('=========================='.yellow);
        console.log('       Seleccione'          .yellow);
        console.log('==========================\n'.yellow);

        console.log(`${ '1.'.yellow } Crear reserva`);
        console.log(`${ '1.1.'.yellow } Registrar check-in`);
        console.log(`${ '1.2.'.yellow } Ver lista de reservas`); 
        console.log(`${ '1.3.'.yellow } Ver lista de habitaciones disponibles`);
        console.log(`${ '1.4.'.yellow } Registrar check-out`);
        console.log(`${ '1.5.'.yellow } Gestionar servicios`);
        console.log(`${ '0.'.yellow } Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })

    });

    

}

const pausa = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu,
    pausa
}