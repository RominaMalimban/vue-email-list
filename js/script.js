const { createApp } = Vue;

createApp({
    data() {
      return {
        numEmail : 10,
        listEmail: []
      }
    },

    methods: {
        richiestaEmails(){
            for (let i = 0; i < this.numEmail; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    
                    // console.log(result.data.response);
                    
                    this.listEmail.push(result.data.response);
                    console.log(this.listEmail);
                })
            }
        }
    },

    mounted(){
       
        this.richiestaEmails()
    }
  }).mount('#app');