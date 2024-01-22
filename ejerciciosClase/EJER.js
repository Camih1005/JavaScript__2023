IDS = [
    {"id": "1"},
    {"id": "1"},
    {"id": "2"}
]
fn = new Object()
console.log(fn)
function crear(){
for (let i = 0; i< IDS.length; i++) {
    const element = IDS[i];
    console.log(IDS[0].id)
    if(IDS[0].id === 1){

        fn.push(element)
            console.log(fn)       
    }

}
}
crear()