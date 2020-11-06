/**
 * 
 *  Welcome on Vue JS
 * 
 */

// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// BONUS aggiungere un'immagine presa anch'essa da un data (url dell'immagine)


const app = new Vue ({
    el: '#app',
    data: {
        title: 'Benvenuti nel mondo di Vue!',
        img: 'https://www.fillmurray.com/400/300',
        colorize: ''

    },
    methods: {
        colorChange: function () {
            let rand = Math.floor( Math.random() * 20) + 1
            if (rand < 5) {
                this.colorize = 'tomato';
            } else if (rand >= 5 && rand < 10) {
                this.colorize = 'crimson';
            } else if (rand >= 10 && rand < 15) {
                this.colorize = 'dodgerblue';
            } else {
                this.colorize = 'purple';
            }
        return this.colorize;
        }
    }
});