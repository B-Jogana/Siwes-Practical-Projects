const panels = document.querySelectorAll('.panel');

/*loop all the element with panle class*/
panels.forEach((panel) => {

    

     /* apply active to any element on click*/ 
    panel.addEventListener('click', () => {

        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses(){
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}



document.getElementById('btn').addEventListener("click" ,()=>{

    card.style.backgroundColor =
   " #" + Math.floor(Math.random()*1677215).toString(16).padStart(6,"0");

})