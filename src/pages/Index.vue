<template>
  <q-page padding class="flex flex-center">
    <div
      id="welcome-text"
      class="text-white q-ma-sm"
      style="text-transform: uppercase"
    >
      {{$t('message')}}
    </div>
    <q-img
      src="~assets/starwarsCapa.svg"
    />
    <div
      class="row  q-ma-sm"
      v-for="btn in buttons"
      :key="btn"
    >
      <q-btn
        class="col-12"
        :label="$t(btn.btnLabel)"
        :to="btn.btnLink"
        style="background-color: #e5b13b"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      buttons: [
        { btnLabel: 'films', btnLink: '/films' },
        { btnLabel: 'people', btnLink: '/people' },
        { btnLabel: 'planets', btnLink: '/planets' },
        { btnLabel: 'species', btnLink: '/species' },
        { btnLabel: 'starships', btnLink: '/starships' },
        { btnLabel: 'vehicles', btnLink: '/vehicles' }
      ]
    }
  },
  mounted () {
  }
}
</script>
