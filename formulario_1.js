
   
const t0= 200;
const t80= t0 - (80*t0/100);
const t50 = t0/2;
const t15 = t0 - (15*t0/100);


const select = document.getElementById('selector1');
const cantidad_t = document.getElementById('cantidad1');
const total = document.getElementById('total1');
const resumen = document.getElementById('btn_resumen');
const reset = document.getElementById('borrar');




    
    resumen.addEventListener('click',()=>{
        let condicion = select.value;
        let cv = cantidad_t.value;

    if (condicion == 0 || condicion == "")
    { 
        total.innerText = t0 * cv
    } 
    if (condicion == 1)
    {
        total.innerText = t80*cv
    }
    if (condicion == 2)
    {
        total.innerText = t50*cv 
    }
    if (condicion== 3)
    {
        total.innerText = t15*cv
    }

    })
        
    


reset.addEventListener('click',borrar);
function borrar(){
    document.querySelector('.formulario_1').reset();
    total.innerText = null;

};


    







    































