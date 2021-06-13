<template>
  <q-page padding>
    <div
      v-for="film in films"
      :key="film"
      class="text-white text-center"
    >
      title: {{ film.title }}
      <br>
      directy by: {{ film.director }}
      <br>
      producer: {{film.producer}}
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFilms',
  data () {
    return {
      films: []
    }
  },
  mounted () {
    this.$axios.get('http://swapi.dev/api/films/').then(response => {
      response.data.results.forEach(element => {
        this.films.push(element)
      })
    })
  }
}
</script>
