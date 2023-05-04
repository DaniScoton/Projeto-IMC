function calcularImc(){
    //função "replace" transforma valores
    var peso = parseFloat(document.getElementById('peso').value.replace(",", "."));
    var altura = parseFloat(document.getElementById('altura').value.replace(",", "."));
    var aviso = document.getElementById('aviso');

    if(isNaN(peso) || isNaN(altura)){
        aviso.innerHTML = "Dado Inválido";
        aviso.className = "aviso-erro";
    }else{
        var resultado = peso / (altura*altura);
        console.log(resultado);

        if(resultado >= 0 && resultado < 19){
            aviso.innerHTML = "Você está abaixo do peso: " + Math.floor(resultado);
            aviso.className = "aviso-abaixo";
        }else if(resultado >=19 && resultado <=24){
            aviso.innerHTML = "Você está no Peso Ideal: " +  Math.floor(resultado);
            aviso.className = "aviso-ideal";
        }else if(resultado >=25 && resultado <=29){
            aviso.innerHTML = "Você está com Sobrepeso: " +  Math.floor(resultado);
            aviso.className = "aviso-sobrepeso";
        }else if(resultado >=30 && resultado <=34){
            aviso.innerHTML = "Você está em Obesidade Grau I: " +  Math.floor(resultado);
            aviso.className = "aviso-obs1";
        }else if(resultado >=35 && resultado <=39){
            aviso.innerHTML = "Você está em Obesidade Grau II: " +  Math.floor(resultado);
            aviso.className = "aviso-obs2";
        }else if(resultado >=40){
            aviso.innerHTML = "Você está em Obesidade Grau III: " +  Math.floor(resultado);
            aviso.className = "aviso-obs3";
        }else{
            aviso.innerHTML = "Classificação Não Existente";
            aviso.className = "aviso-erro";
        }
    }   
}