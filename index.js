function CalcularMayor (){

  var numero1 = parseInt(document.getElementById("Num1").value);
  var numero2 = parseInt(document.getElementById("Num2").value);
 

    if(numero1 > numero2){
        return numero1 = mayor;
    }else{
        numero2 = mayor;
    }
    console.log(mayor);
}


CalcularMayor();

