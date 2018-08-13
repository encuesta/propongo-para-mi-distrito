firebase.initializeApp({
    apiKey: "AIzaSyDENgLoYv5-0sRF5uc5uBveJVwKMOPtrfE",
    authDomain: "octavos-4b532.firebaseapp.com",
    projectId: "octavos-4b532"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();


// Agregar documentos  
function guardar(){
    var nombre = document.getElementById('nombre').value;
    var seguridad = document.getElementById('seguridad').value;
    var vehicular = document.getElementById('vehicular').value;
    var urbanismo = document.getElementById('urbanismo').value;


    db.collection("tresPropuestas").add({
            Nombre: nombre,
            Primera_Propuesta: seguridad,
            Segunda_Propuesta: vehicular,
            Tercera_Propuesta: urbanismo
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value = '';
            document.getElementById('seguridad').value = '';
            document.getElementById('vehicular').value = '';
            document.getElementById('urbanismo').value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    
}

// Leer documentos
var tabla = document.getElementById('tabla');

db.collection("tresPropuestas").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.data()}`);
        tabla.innerHTML += `
        <tr>
            <td>${doc.data().Nombre}</td>
            <td>${doc.data().Primera_Propuesta}</td>
            <td>${doc.data().Segunda_Propuesta}</td>
            <td>${doc.data().Tercera_Propuesta}</td>
        </tr>
        `
    });
});

