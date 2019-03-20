const{sacarPromedio,argv}=require('./datos.js')

console.log(argv);
if(argv._[0]=='promedio'){
	console.log('El Promedio de '+argv.n+' es: '+sacarPromedio(argv.m+argv.i+argv.p));
}
else{
	console.log('Promedio no calculado');
}