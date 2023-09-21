const {createApp} = Vue 
createApp({
    data(){
        return{
            arrayEvents: [],
            arrayCategory:[],
            filterEvents:[],
            inputSearch:``,
            checked:[],
            filterEventsPast:[],
        }
    },

    created(){
        fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
        .then(response => response.json())
        .then(data =>{
            this.arrayEvents = data.events
            this.filterEventsPast = this.arrayEvents.filter(event => event.date < data.currentDate)

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
            this.filterEvents = this.filterEventsPast.filter(event => event.name.toLowerCase().includes(this.inputSearch.toLowerCase())
            && (this.checked.includes(event.category) || this.checked.length == 0 ))
        }
    },
}).mount("#app")
    