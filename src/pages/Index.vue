<template>
  <q-page padding class="flex flex-center">
    <q-img
      src="~assets/starwarsCapa.svg"
    />
    <div
      class="row"
      v-for="btn in buttons"
      :key="btn"
    >
      <q-btn
        padding
        class="col-10"
        :label="btn.btnLabel"
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
  }
}
</script>
