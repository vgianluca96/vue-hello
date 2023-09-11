
const { createApp } = Vue


createApp ({
    data() {
        return {
            message:'Hello World!',
            myImg: 'https://picsum.photos/500/500',
            fontColor:'text-red'
        }
    },
    methods: {
        changeColor: function() {

            console.log(this.fontColor);
            if (this.fontColor == 'text-red') {
                this.fontColor = 'text-green';
            } else {
                this.fontColor = 'text-red';
            }
        }
    }
}).mount('#app')