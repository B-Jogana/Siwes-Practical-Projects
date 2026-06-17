const app = Vue.createApp({
    data() {
        return {
            fList : [
                {id:1, name: "Fried Rice", price: 2, order: "Available"},
                {id:1, name: "Jallof Spaghetti", price: 2.5, order: "Available"},
                {id:1, name: "Chips", price: 1.5, order: "Not Available"},
                {id:1, name: "Fish Pie", price: 1, order: "Available"},
        

            ],
            showFood: true,
        }

    },

    methods: {
        clearList(){
            this.showFood = !this.showFood;
        }
    }


})

app.mount('#app')