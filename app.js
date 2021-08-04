

function imc(){
  var height = prompt("Introduce tu altura, Sin .","");

  var weight = prompt("Introduce tu peso","");
  height = height/100;
  console.log(height);
  
  console.log(weight);
 

  if(height!=null&&weight!=null){
    
  var imc = weight/(height*height);
  console.log(imc.toFixed(3));
    if(imc<18.5){ alert(imc.toFixed(3) +" "+"Peso insuficiente"); }
			else if(imc>=18.5 && imc<=24.9){ alert(imc.toFixed(3) + " "+ "Peso normal");  }
			else if(imc>=25 && imc<=26.9){ alert(imc.toFixed(3) +" "+"Sobrepeso grado 1");  }
      else if(imc>=27 && imc<=29.9){ alert(imc.toFixed(3) +" "+"Sobrepeso grado 2");  }
      else if(imc>=30 && imc<=34.9){ alert(imc.toFixed(3) +" "+"Obesidad grado 1");  }
      else if(imc>=35 && imc<=39.9){ alert(imc.toFixed(3) +" "+"Obesidad grado 2");  }
      else if(imc>=40 && imc<=49.9){ alert(imc.toFixed(3) +" "+"Obesidad Morbida");  }
			else if(imc>49.9){ alert(imc.toFixed(3) +" "+"Obesidad Extrema"); }

    }
}


