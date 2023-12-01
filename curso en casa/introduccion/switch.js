const usuario = {
	nombre: 'Camilo',
	pais: 'colombia',
};

/*if (usuario.pais === 'mexico' && usuario.edad > 18) {
	console.log('El usuario es mexicano');
} else if (usuario.pais === 'españa') {
	console.log('El usuario es español');
} else if (usuario.pais === 'argentina') {
	console.log('El usuario es argentino');
} else {
	console.log('El usuario es de otro pais');
}
*/
switch(usuario.pais){
    case 'colombia':
        console.log('El usuario es colombiano');
		break;
    case 'españa':
        console.log('El usuario es español');
		break
    case 'argentina': 
	consele.log('El usuario es argentino');
	break
	default:
		console.log('el usuario es de otro pais')
}