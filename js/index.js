function ocultarElemento(idElemento){
     document.getElementById(idElemento).style.display = "none";
}

function mostrarElemento(idElemento){
     document.getElementById(idElemento).style.display = "block";
}

function carregarRevistas(idElemento, areaInteresse){
    ocultarElemento(idElemento);
    if(areaInteresse == "Biologia"){
        mostrarElemento("divBiologia");
    }
    else if(areaInteresse == "Tecnologia"){
        mostrarElemento("divTecnologia");
    }
    else{
        mostrarElemento("divCiencias");
    }
}