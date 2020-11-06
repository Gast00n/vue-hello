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
        img: 'https://www.fillmurray.com/800/600'
    }
});