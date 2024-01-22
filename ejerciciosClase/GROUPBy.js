
     Array.prototype.groupBy = function (fn) {
            return this.reduce((result, item) => {
                const key = fn(item);
                if (!result[key]) {
                    result[key] = [];
                }
                result[key].push(item);
                return result;
            }, {});
        };
   
       const grupo = [1,2,3,4,5,6,7,8,9,].groupBy(g =>{
        return g %2 === 0 ? 'par':'inpar'
       })

        console.log(grupo);
/////////////////////
        const Personas = [{nombre:'camilo'},{nombre: 'Luis'},{nombre:'catalina'}].groupBy(usuarios =>{
            if(usuarios.nombre.includes('e')){
                return 'e'
            }
            return 'resto'
        })
        console.log(Personas)
//////////////////
        const edades = [{nombre : 'camilo', edad : 18},{nombre:'catalina',edad : '13'},{nombre:'andrey',edad : 23}].groupBy(user =>{
            return user.edad >= 18 ? 'mayores': 'menores'
        })
        console.log(edades)
///////////////////
const IDS = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"},
    {'id': '2'},
    {'id':'4'}
];

const groupedIds = IDS.groupBy(item => item.id);
console.log(groupedIds);
