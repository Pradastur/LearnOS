
  function aplicaEventoClase(eve, cla, fun) {
    elemento=document.getElementsByClassName(cla);
    for(i=0;i<elemento.length;i++){
      elemento[i].addEventListener(eve, fun);
    }
  }

  function deploy(){
    aplicaEventoClase("click", "languages", fct);

  }
  function lightup(){
    aplicaEventoClase("mouseover", "languages", function(){this.style.backgroundColor="grey";});
    aplicaEventoClase("mouseout", "languages", function(){this.style.backgroundColor="white";});

  }

  function fct(){
    if (this.nextElementSibling.style.display == "block") {
      this.nextElementSibling.style.display="none";
    }
    else {
      this.nextElementSibling.style.display="block";
    }

  }
