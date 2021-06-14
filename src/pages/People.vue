<template>
  <q-page padding>
    <q-card
      v-for="person in people"
      :key="person"
      class="my-card text-black q-my-md"
      style="background: #e5b13b"
    >
      <q-card-section id="people-card">
        <div class="row">
          <div style="font-weight: 900" class="card-title col-shrink q-ma-none q-pa-none text-h6">{{$t('name')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{person.name}}</div>
        </div>
        <q-separator/>
        <div class="row">
          <div style="font-weight: 900" class="card-title col-shrink q-ma-none q-pa-none text-h6">{{$t('height')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{person.height}} cm</div>
        </div>
        <q-separator/>
        <div class="row">
          <div style="font-weight: 900" class="card-title col-shrink q-ma-none q-pa-none text-h6">{{$t('hair_color')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{person.hair_color}}</div>
        </div>
        <q-separator/>
        <div class="row">
          <div style="font-weight: 900" class="card-title col-shrink q-ma-none q-pa-none text-h6">{{$t('skin_color')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{person.skin_color}}</div>
        </div>
        <q-separator/>
        <div class="row">
          <div style="font-weight: 900" class="card-title col-shrink q-ma-none q-pa-none text-h6">{{$t('eye_color')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{person.eye_color}}</div>
        </div>
        <q-separator/>
        <div class="row">
          <div style="font-weight: 900" class="card-title col-shrink q-ma-none q-pa-none text-h6">{{$t('gender')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{person.gender}}</div>
        </div>
        <q-separator/>
        <div class="row">
          <div style="font-weight: 900" class="card-title col-shrink q-ma-none q-pa-none text-h6">{{$t('birth_year')}}:</div>
          <div class="col-grow q-ml-sm q-pa-none text-h6">{{person.birth_year}}</div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PagePeople',
  data () {
    return {
      people: [],
      count: 0
    }
  },
  mounted () {
    this.$axios.get('http://swapi.dev/api/people/').then(response => {
      for (let i = 0; i < response.data.count; i++) {
        this.$axios.get('http://swapi.dev/api/people/' + i + '/').then(newResponse => {
          const person = {
            name: newResponse.data.name,
            height: newResponse.data.height,
            hair_color: newResponse.data.hair_color,
            skin_color: newResponse.data.skin_color,
            eye_color: newResponse.data.eye_color,
            gender: newResponse.data.gender,
            birth_year: newResponse.data.birth_year
          }
          this.people.push(person)
        })
      }
    })
  }
}
</script>
