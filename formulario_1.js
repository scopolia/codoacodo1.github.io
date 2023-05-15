
    const valorDelTicket = 200
    const t80 = valorDelTicket - (valorDelTicket*80/100)
    const t50 = valorDelTicket - (valorDelTicket*50/100)
    const t20 = valorDelTicket - (valorDelTicket*20/100) 




const selector = document.getElementById('selector1');

const cantidad = document.getElementById('cantidad1')

const valorTotal = document.getElementById('total1')

const resumen1 = document.getElementById('btn_resumen')



resumen1.addEventListener('click', validar);

function validar (){
    var categoriaElegida = selector

    if (categoriaElegida.value == 0 || categoriaElegida.value == "")
    {
        
        valorTotal.innerText = valorDelTicket * cantidad.value

    } 
    if (categoriaElegida.value == 1)
    {
        valorTotal.innerText = t80*cantidad.value
        
    }
    if (categoriaElegida.value == 2)
    {
        valorTotal.innerText = t50*cantidad.value
        
    }
    if (categoriaElegida.value == 3)
    {
        valorTotal.innerText = t20*cantidad.value
       
    }

};
document.getElementById('borrar').addEventListener('click',()=>{
  let resetFormulario= document.querySelector('.formulario_1');
  resetFormulario.reset();
  valorTotal.innerText = null
})


    







    































