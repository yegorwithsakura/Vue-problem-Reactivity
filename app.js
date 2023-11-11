const app = Vue.createApp({
    data(){
        return{
            counter:0,
            state:'',
        }
    },
    watch:{
        counter(value){
            if(value >= 37){
            const that = this;
            setTimeout(function(){
                that.counter=0;
            },5000)
          }
        }
    },
    methods: {
        add(num){
            this.counter = this.counter + num;
        },
    },
    computed:{
        notReach(counter){
            if(this.counter < 37){
                return  'Not there yet';
               }else if (this.counter === 37){
                return '37'
            }else
            return 'Too much!';
        },
    }
})

app.mount('#assignment')