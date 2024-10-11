//alert("Hola que tal ok soy un alerta")

// variables

var nombre="Dagoberto Fiscal";
var altura=180;

//Mostrar en pantalla
var concatenacion="La persona: "+nombre+", tiene una altura de: "+altura

//con document.write
//document.write(nombre)
// document.write(concatenacion)

//con document.getElementbyID
var datos=document.getElementById("informacion")
datos.innerHTML=`<br>
                <hr> 
                <h1>
                La persona:  ${nombre}, tiene una altura de: ${altura}
                </h1>
                <hr>
                 <br>
                `;
//agregar mas contenido con innerHTML+=                
datos.innerHTML+=`
                 <hr>
                 <h1>Se muestra el contenido ...</h1>
                <h2>Mi nombre es: ${nombre}</h2>
                <h2>y mi altura es: ${altura}</h2>
                <br>
                <hr>
                `;
//condicionales

if (altura>=180)
    datos.innerHTML+="<h2>Es una persona  de estatura promedio</h2>"
else
    datos.innerHTML+="<h2>Es una persona de estatura por debajo del promedio</h2>"


//ciclos

for(var i=0;i<=200;i++)
{
    //datos.innerHTML+=` <h2>El numero es: ${i}</h2>`;
}

//Funciones
function suma(num1,num2)
{
    var numero1=num1;
    var numero2=num2;

    suma=numero1+numero2

    return suma
}

//utiliar la funcion 

var resultado=suma(23,78)

datos.innerHTML+=`<hr> <p>El resultado de la suma es: ${resultado} ok...</p>`

//Arreglos

var frutas=['melon','sandia','pero','manzana'];

for(var i=0;i<frutas.length;i++)
{
    datos.innerHTML+=`<hr><h1>El valor del arreglo de la posicion ${i+1} es: ${frutas[i]}</h1>`;
}

var i=1
frutas.forEach(element => {
    datos.innerHTML+=`<hr><h1>El valor del arreglo de la posicion ${i} es: ${element}</h1>`;
    i++;
});









