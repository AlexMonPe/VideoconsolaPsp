var btnpwr = document.getElementById('btnpwr');
var pow = document.getElementById('pow');
var estado=0;



    function cambio()
    {

        if(estado==0)
        {
            pow.classList.add('encender');
            estado=1;
        }
            else
            {
                pow.classList.remove('encender');
                estado=0;
            }
        
    }
        btnpwr.addEventListener('click',cambio,true)