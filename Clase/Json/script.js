

        const cars = `[
        {
            "modelo": "ford mustang",
            "produccion": 2010,
            "millaje": 12000
        },

        {
            "modelo": "Honda accord",
            "produccion": 2021,
            "millaje": 4560
        },

        {
            "modelo": "volskwagen Golf",
            "produccion": 2016,
            "millaje": 58200
        }
        ]`;

        console.log(typeof cars);

        // para convertir la cadena en un objeto, usar el método parse

        const jsonData = JSON.parse(cars);
        console.log(typeof jsonData);

        // como manipular el ebjeto(ARRAY) como cualquier otro objeto
        const carroMasNuevo = jsonData.filter(
            (carro)=> carro.produccion >= 2010 && carro.millaje < 12100
        
        );
        console.log(carroMasNuevo)

        //para convertir los datos en una cadena de texto usar el metodo stringify

            const newCars = JSON.stringify(carroMasNuevo)
            console.log(typeof newCars)

            //MODIFICAR UN ARCHIVO JSON

                const fs = require('fs');

                //crear un nuevo objeto
                const carroMas = {
            "modelo": "Lamborguini URUS",
            "produccion": 2022,
            "millaje": 500
        }

        const newCarsssss = JSON.stringify(carroMas);
        fs.writeFile('cars.json',newCarsssss,(error)=>{
            if(error) throw error;
            console.log('informacion recibida')
        })
