fetch('http://localhost:3000/trainers/3', {
    method: 'PUT',
    body: JSON.stringify({
        id: "3",
        "nombres": "Yulieth",
        "apellidos": "rueda",
        "especialidad": "fullstack python",
        "sexo": "f",
        "edad": 20
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error("Error!!!: " + error));
  //ponet tambien pero todo