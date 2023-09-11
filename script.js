
const { createApp } = Vue


createApp ({
    data() {
        return {
            message:'Hello World!',
            myImg: 'https://picsum.photos/500/500'
        }
    }
}).mount('#app')