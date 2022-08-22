/* Este bucle permite calcular el ahorro diario acumulado que produce una persona que ahorra una cantidad fija por día, hasta el valor de $2000  */




let ahorro = prompt  ("Ingrese la cantidad que ahorra por día, hasta $200. Cada vez que presione continuar se sumará un día, hasta llegar a un máximo de $2000 de ahorro.");

if  (parseInt(ahorro) <= 200) {
    for (  i =  parseInt(ahorro) ; i <= 2000 ; i = i + parseInt(ahorro)){
    alert (`Hasta este día, Ud. tendrá ahorrados $ ${i}`);
}
    alert( "Muchas gracias");}    
else{
        alert ("Ingrese un número menor o igual a 200")
    };


