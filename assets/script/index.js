const {createApp} = Vue 
createApp({
    data(){
        return{
            arrayEvents: [],
            arrayCategory:[],
            filterEvents:[],
            inputSearch:``,
            checked:[],
        }
    },

    created(){
        fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
        .then(response => response.json())
        .then(data =>{
            this.arrayEvents = data.events

            /*Filtro por categoria checkbox */
            const category = this.arrayEvents.map (evento => evento.category)
            let setInfo = Array.from(new Set (category))
            this.arrayCategory = setInfo
        })
        .catch(error =>console.log(error))
    },

    methods:{
    },

    computed:{
        /*filtra si category tiene eventos guardados */
        filter(){
            this.filterEvents = this.arrayEvents.filter(event => event.name.toLowerCase().includes(this.inputSearch.toLowerCase())
            && (this.checked.includes(event.category) || this.checked.length == 0 ))
        }
    },
}).mount("#app")



