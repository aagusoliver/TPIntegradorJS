const URL = 'https://back-sandbox.herokuapp.com/api'

const inputEmail = document.getElementById('inputEmail');
const inputPass = document.getElementById('inputPass');
const Boton = document.getElementById('Boton');
const botoncito = document.getElementById('botoncito');


const login = async () => {

    try{
        const res = await fetch (`${URL}/auth/login` , { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:inputEmail.value, 
                password:inputPass.value
            }) 

        });
        const json = await res.json();
        console.log(json)
        
        const token = json.token;
        if (token) {
            localStorage.setItem('token', json.token);
            const llevarAPagina = (e) => {
                window.location.href =  '/products.html'
            }
            const boton = document.createElement('button');
            boton.textContent= "Ver los productos";
            botoncito.appendChild(boton);
            boton.onclick = llevarAPagina;
            boton.className = 'botonQueAprece'
        };



    }catch ( error ) {
        alert(error);
    };
    
} ;

Boton.addEventListener('click', login );


