const app = Vue.createApp({
  data () {
    return {
      showBooks: true,
      books: [
        {title: 'What moves the dead', author: 'T. Kingfisher', img: 'assets/1.jpg', isFav: true},
        {title: 'What feasts at night', author: 'T. Kingfisher', img: 'assets/2.jpg', isFav: false},
        {title: 'What stalks the deep', author: 'T. Kingfisher', img: 'assets/3.jpg', isFav: true},
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  } 
})

app.mount('#app')