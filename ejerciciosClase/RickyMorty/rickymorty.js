
async function getRicky() {
   


    const apiUrl = 'https://rickandmortyapi.com/api/character';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const Image = data.sprites.front_default;
        const andName = data.name;
        const status = data.status;

        document.getElementById('pokemonTable').innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>IMAGEN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style='width:100px; text-align: center;'>${Image}</td>
                    <td style='position:relative;left:37px;color: rgb(231, 231, 0)'>${status}</td>
                    <td><img src="${Image}" alt="${andName}" style="width: 170px; height: 170px;position:relative;left:60px"></td>
                </tr>
            </tbody>
        `;

    } catch (error) {
        alert('Error al obtener los datos:', error);
    }
}

document.getElementById('cacas').innerHTML= `<img src="${apiUrl}" alt="">`
const apiUrl = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
console.log(apiUrl)