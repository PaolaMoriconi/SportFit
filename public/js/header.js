const categorias = document.querySelectorAll("#ul__header a")

categorias.forEach(a => {
    a.addEventListener("mousemove",()=>{
        a.style.color="blue"
    })
    a.addEventListener("mouseleave",()=>{
        a.style.color="white"
    })
    
});
