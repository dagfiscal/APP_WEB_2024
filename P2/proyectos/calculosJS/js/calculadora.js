
        
        function operacion()
        {
            var n1,n2,ope,respuesta,tipoope,signo;

            n1=document.getElementById("numero1").value;
            n2=document.getElementById("numero2").value;
            tipoope=document.getElementById("tipo").value;


            if (isNumber(n1) && isNumber(n2))
                {
                    switch (tipoope)
                        {
                            case '1': ope=parseInt(n1)+parseInt(n2);
                                    signo="+";
                                    break;
                            case '2': ope=parseInt(n1)-parseInt(n2);
                                    signo="-";
                                    break; 
                            case '3': ope=parseInt(n1)*parseInt(n2);
                                    signo="*";
                                    break; 
                            case '4': ope=parseInt(n1)/parseInt(n2); 
                                    signo="/";
                                    break;                  
                        }

                        respuesta=document.getElementById("resultado").innerHTML=`<h3>${n1} ${signo} ${n2} = ${ope}</h3>`;
              }
            else
                {
                    respuesta=document.getElementById("resultado").innerHTML=`<h3>Ingresa por favor numeros</h3>`;
                }
            
        }

        function isNumber(n) 
        {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
     
