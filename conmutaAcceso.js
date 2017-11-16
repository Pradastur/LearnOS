function showAccessForm(){
			document.getElementById("accessform").style.display="block";
			document.getElementById("user").focus();
		}


function hideAccessForm(){
				document.getElementById("accessform").style.display="none";
			}




			function aplicaEventoClase(eve, cla, fun) {
				elemento=document.getElementsByClassName(cla);
				for(i=0;i<elemento.length;i++){
					elemento[i].addEventListener(eve, fun);
				}
			}

			function lightup(){
				aplicaEventoClase("mouseover", "light", function(){this.style.backgroundColor="grey";});
				aplicaEventoClase("mouseout", "light", function(){this.style.backgroundColor="white";});

			}
