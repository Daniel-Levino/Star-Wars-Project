<template>
  <q-page padding>
    <q-card
      v-for="film in films"
      :key="film"
      class="my-card text-black q-my-md"
      style="background: #e5b13b"
    >
      <q-card-section>
        <div class="row">
          <div style="font-weight: 900" class="col-grow q-ma-none q-pa-none text-h6">{{$t('title')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{film.title}}</div>
        </div>
        <div class="row">
          <div style="font-weight: 900" class="col-grow q-ma-none q-pa-none text-h6">{{$t('director')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{film.director}}</div>
        </div>
        <div class="row">
          <div style="font-weight: 900" class="col-grow q-ma-none q-pa-none text-h6">{{$t('producer')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{film.producer}}</div>
        </div>
      </q-card-section>
    </q-card>
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
