const opciones = {
	nombre:{
		demand:true,
		alias:'n'
	},
	matematicas:{
		demand: true,
		alias:'m'
	},
	ingles:{
		demand: true,
		alias:'i'
	},
	programacion:{
		demand: true,
		//default:0,
		alias:'p'
	}
}

let sacarPromedio = (n1,n2,n3)=>(n1+n2+n3)/3;

const argv = require('yargs')
             .command('promedio','Calcular promedio',opciones)
              .argv


module.exports = {
	sacarPromedio,
	argv
};

