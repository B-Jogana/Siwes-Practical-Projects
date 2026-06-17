
const app = Vue.createApp({
    data() {
        return{
            logos:([
                {title:'The Vue', author: "Ado", img:'assets/vue.png', isFav:false},
                {title:'The React', author: "Adam", img:'assets/react.png', isFav:false},
                {title:'The Java', author: "Yunus", img:'assets/java.png', isFav:false},

            ]),
            showlogos:true ,
            showFav:false,

            

        }
    },
    methods: {

        
        toggleShowlogos() {
            this.showlogos = !this.showlogos
            //alert display 
            if (this.showlogos){
                alert("Logos are now displaying the logos!\nclick to select your favorite logo");
            } else {
               alert(" Logos are now hidding the logo");
            }
            
        
        },
        toggleColor(logo){
            logo.isFav = !logo.isFav

            //alert notification
            if(logo.isFav){
                alert(`${logo.title} has been added to favorite`);
            }else{
                alert(`${logo.title} has been removed from favorite`);
            }
        },

        toggleFav(){
            this.showFav = !this.showFav 


            if (showFav && filteredLogos.length === 0) {
                triggerToast("Favorites opened, but it's empty!");
            } else if (showFav) {
                triggerToast("Showing your favorite logos!");
            } else {
                triggerToast("Favorites section hidden.");
            }

            //alert notification

            if(this.showFav){
                if(this.filteredLogos.length === 0){
                    alert("Favorite Section is Opened\nHowever you have not selected any!")
                } else{
                    alert("Displaying your favorite logos!")
                }
            }else{
                alert("Favorite logos section is hidden!")
            }
        }
        
    },

    computed: {
        filteredLogos(){
            return this.logos.filter((logo)=> logo.isFav)
            
        }
    }
})

app.mount('#app')