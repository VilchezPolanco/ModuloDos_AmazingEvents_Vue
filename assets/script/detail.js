const {createApp} = Vue
createApp({
    data(){
        return {
            events: [],
            eventsDetail: ``,
        }
    },
    
    created(){
        fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
        .then(res => res.json())
        .then(data =>{
            this.events = data.events
    
            const params = new URLSearchParams(location.search) /*te deja usar los metodos de location */    
            const idParam = params.get(`_id`) /* uno de los metodos get para capturar el id*/
            this.eventsDetail = this.events.find((event) => (event._id == idParam));
        })
        .catch(error => console.log(error))
    },
}).mount("#app")


